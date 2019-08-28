// require the express library
const express = require('express')

// require the passport library for bearer authentication
const passport = require('passport')

// require our Ingredient mongoose model, to interact with the database
const Ingredient = require('../models/ingredient')

// import our custom errors
const customErrors = require('../../lib/custom_errors')

// pull out the handle404 error. This will be used if an example doesn't exist when you tru to show/updated/delete it
const handle404 = customErrors.handle404

// will throw an error if resource doesn't belong to user trying to edit it
const requireOwnership = customErrors.requireOwnership

// get a function that requires that requests have auth headersExample
const requireToken = passport.authenticate('bearer', { session: false })

// create a router for this file. We will add our routes to this router, then add the router to the 'app' in server.js
const router = express.Router()

// INDEX action
router.get('/ingredients', (req, res, next) => {
  Ingredient.find()
    .then(ingredients => {
      return ingredients.map(ingredient => ingredient.toObject())
    })
    .then(ingredients => res.json({ ingredients }))
    .catch(next)
})

// SHOW action
router.get('/ingredients/:id', (req, res, next) => {
  const id = req.params.id

  Ingredient.findById(id)
    .populate('ingredient')
    .then(handle404)
    .then(ingredient => {
      return ingredient.toObject()
    })
    .then(ingredient => {
      res.json({ ingredient })
    })
    .catch(next)
})

// CREATE
router.post('/ingredients', requireToken, (req, res, next) => {
  console.log('body is', req.body)
  req.body.ingredient.owner = req.user.id
  Ingredient.create(req.body.ingredient)
    .then(ingredient => {
      return ingredient.toObject()
    })
    .then(ingredient => res.status(201).json({ ingredient }))
    .catch(next)
})

// DESTROY
// DELETE /ingredients/5a7db6c74d55bc51bdf39793
router.delete('/ingredients/:id', requireToken, (req, res, next) => {
  Ingredient.findById(req.params.id)
    .then(handle404)
    .then(ingredient => {
      // throw an error if current user doesn't own `ingredient`
      requireOwnership(req, ingredient)
      // delete the ingredient ONLY IF the above didn't throw
      ingredient.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router

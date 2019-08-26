// require the express library
const express = require('express')

// require the passport library for bearer authentication
const passport = require('passport')

// require our Recipe mongoose model, to interact with the database
const Recipe = require('../models/recipe')

const Ingredient = require('../models/ingredient')

// import our custom errors
const customErrors = require('../../lib/custom_errors')

// pull out the handle404 error. This will be used if an recipe doesn't exist when you tru to show/updated/delete it
const handle404 = customErrors.handle404

// will throw an error if resource doesn't belong to user trying to edit it
const requireOwnership = customErrors.requireOwnership

// require a function that will remove any properties with values of an empty string
const removeBlanks = require('../../lib/remove_blank_fields')

// get a function that requires that requests have auth headersExample
const requireToken = passport.authenticate('bearer', { session: false })

// create a router for this file. We will add our routes to this router, then add the router to the 'app' in server.js
const router = express.Router()

// INDEX action
router.get('/recipes', (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      return recipes.map(recipe => recipe.toObject())
    })
    .then(recipes => res.json({ recipes }))
    .catch(next)
})

// SHOW action
router.get('/recipes/:id', (req, res, next) => {
  const id = req.params.id
  let recipe

  Recipe.findById(id)
    .then(handle404)
    .then(foundRecipe => {
      recipe = foundRecipe.toObject()
      return Ingredient.find({ recipe: id })
    })
    .then(ingredients => {
      recipe.ingredients = ingredients
      res.json({ recipe })
    })
    .catch(next)
})

// CREATE
router.post('/recipes', requireToken, (req, res, next) => {
  req.body.recipe.owner = req.user.id

  Recipe.create(req.body.recipe)
    .then(recipe => {
      return recipe.toObject()
    })
    .then(recipe => res.status(201).json({ recipe }))
    .catch(next)
})

// UPDATE
// PATCH /recipes/:id
router.patch('/recipes/:id', requireToken, removeBlanks, (req, res, next) => {
  // delete any owner properties on incoming recipes, so user cant change who owns a resource
  delete req.body.recipe.owner

  Recipe.findById(req.params.id)
    .then(handle404)
    .then(recipe => {
      // make sure resource is owned by logged in user
      requireOwnership(req, recipe)

      // update resource
      return recipe.update(req.body.recipe)
    })
    // respond to client with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router

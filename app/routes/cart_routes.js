// require the express library
const express = require('express')

// require the passport library for bearer authentication
const passport = require('passport')

// require our Cart mongoose model, to interact with the database
const Cart = require('../models/cart')

// import our custom errors
const customErrors = require('../../lib/custom_errors')

// pull out the handle404 error. This will be used if an example doesn't exist when you tru to show/updated/delete it
const handle404 = customErrors.handle404

// will throw an error if resource doesn't belong to user trying to edit it
const requireOwnership = customErrors.requireOwnership

// get a function that requires that requests have auth headersExample
const requireToken = passport.authenticate('bearer', { session: false })

// require a function that will remove any properties with values of an empty string
const removeBlanks = require('../../lib/remove_blank_fields')

// create a router for this file. We will add our routes to this router, then add the router to the 'app' in server.js
const router = express.Router()

// INDEX action
router.get('/carts', (req, res, next) => {
  Cart.find()
    .then(carts => {
      return carts.map(cart => cart.toObject())
    })
    .then(carts => res.json({ carts }))
    .catch(next)
})

// SHOW action
router.get('/carts/:id', (req, res, next) => {
  const id = req.params.id

  Cart.findById(id)
    .then(handle404)
    .then(cart => {
      return cart.toObject()
    })
    .then(cart => {
      res.json({ cart })
    })
    .catch(next)
})

// CREATE
router.post('/carts', requireToken, (req, res, next) => {
  req.body.cart.owner = req.user.id
  Cart.create(req.body.cart)
    .then(cart => {
      return cart.toObject()
    })
    .then(cart => res.status(201).json({ cart }))
    .catch(next)
})

// UPDATE
// PATCH /carts/:id
router.patch('/carts/:id', requireToken, removeBlanks, (req, res, next) => {
  // delete any owner properties on incoming carts, so user cant change who owns a resource
  delete req.body.cart.owner

  Cart.findById(req.params.id)
    .then(handle404)
    .then(cart => {
      // make sure resource is owned by logged in user
      requireOwnership(req, cart)

      // update resource
      return cart.update(req.body.cart)
    })
    // respond to client with 204 No Content
    .then(cart => {
      return res.status(204)
    })
    .catch(next)
})

module.exports = router

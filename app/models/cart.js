'use strict'

const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)

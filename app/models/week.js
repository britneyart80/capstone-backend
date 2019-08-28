'use strict'

const mongoose = require('mongoose')

const weekSchema = new mongoose.Schema({
  name: ({
    type: String,
    required: true
  }),
  0: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  1: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  2: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  3: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  4: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  5: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  6: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Week', weekSchema)

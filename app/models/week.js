'use strict'

const mongoose = require('mongoose')

const weekSchema = new mongoose.Schema({
  weekOf: ({
    type: Date,
    required: true
  }),
  mon: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  tues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  weds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  thurs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  fri: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  sat: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  sun: [{
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

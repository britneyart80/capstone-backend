'use strict'

const mongoose = require('mongoose')

const weekSchema = new mongoose.Schema({
  mon: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }],
  tues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }],
  weds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }],
  thurs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }],
  fri: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }],
  sat: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }],
  sun: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: false
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Week', weekSchema)

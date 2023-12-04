const express = require('express')
const { entry } = require('@turbo360/turbo-sdk')
const { configureApp } = require('saxa')

const app = express()

configureApp(app, {
  views: 'templates',   // Set views directory
  static: 'public',     // Set static assets directory
})

const index = require('./routes/index')

app.use('/', index)

module.exports.entry = entry(() => app)

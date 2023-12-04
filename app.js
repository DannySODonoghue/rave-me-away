const express = require('express')
const { entry } = require('@turbo360/turbo-sdk');
const { configureApp, appContext } = require('saxa')

const app = express()

configureApp(app, {
  views: 'templates',   // Set views directory
  static: 'public',     // Set static assets directory
})

app.use(appContext())

// import routes
const index = require('./routes/index')

// set routes
app.use('/', index)

// module.exports = () => app
module.exports.entry = entry(() => app)

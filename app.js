'use strict'

const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const routes = require('./routes/');

app.use(bodyParser.json())

// <Include the router index file>
// <Setup your routes middleware>
// <catch any undefined routes with a 404 middleware>
// <Handle any errors that occur in the routing with error handlers defined at the bottom of our 
// middleware stack>

app.use('/api/v1/', routes)

app.use((req, res, next) => {
  const err = new Error('Oops, not found')
  err.status = 404
  next(err)
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})

'use strict'

const { Router } = require('express')
const router = Router()
// const { getSongs } = require('../controllers/songCtrl')

// <require express Router and require the songs.js router file>
// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)

// router.get('/songs', getSongs)

router.get('/', function(req, res) {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:8080/api/v1/songs",

    "albums": "http://localhost:8080/api/v1/albums",
    "artists": "http://localhost:8080/api/v1/artists",
    "genre": "http://localhost:8080/api/v1/genre",
  });
});

router.use(require('./songs'))
router.use(require('./albums'))
router.use(require('./artists'))
router.use(require('./genres'))

module.exports = router;

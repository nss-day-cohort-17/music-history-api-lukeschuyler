'use strict'

const { Router } = require('express')
const router = Router()

router.get('/', function(req, res) {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:8080/api/v1/songs",
    "albums": "http://localhost:8080/api/v1/albums",
    "artists": "http://localhost:8080/api/v1/artists",
    "genres": "http://localhost:8080/api/v1/genres",
    "params_options": {
      "SYNTAX": "http://localhost:8080/api/v1/songs/{id}",
      "song": "http://localhost:8080/api/v1/songs/7",
      "album": "http://localhost:8080/api/v1/albums/5",
      "artists": "http://localhost:8080/api/v1/artists/2",
      "genres": "http://localhost:8080/api/v1/genres/3",
    }
  });
});

router.use(require('./songs'))
router.use(require('./albums'))
router.use(require('./artists'))
router.use(require('./genres'))

module.exports = router;

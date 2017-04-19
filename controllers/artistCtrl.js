'use strict'

const Artist = require('../models/Artist')

module.exports.getArtists = (req, res, next) => {
  Artist.getAllArtists()
  .then(artists => {
    res.status(200).json(artists)
  })
  .catch(err => {
    next(err)
  })
}

module.exports.getArtist = (req, res, next) => {
  Artist.getOneArtist(req.params.artistId)
  .then(artist => {
    res.status(200).json(artist)
  })
  .catch(err => {
    next(err)
  })
}

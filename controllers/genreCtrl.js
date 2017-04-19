'use strict'

const Genre = require('../models/Genre')

module.exports.getGenres = (req, res, next) => {
  Genre.getAllGenres()
  .then(genres => {
    res.status(200).json(genres)
  })
  .catch(err => {
    next(err)
  })
}

module.exports.getGenre = (req, res, next) => {
  Genre.getOneGenre(req.params.genreId)
  .then(genre => {
    res.status(200).json(genre)
  })
  .catch(err => {
    next(err)
  })
}

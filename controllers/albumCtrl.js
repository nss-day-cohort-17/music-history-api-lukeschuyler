'use strict'

const Album = require('../models/album')

module.exports.getAlbums = (req, res, next) => {
  Album.getAllAlbums()
  .then(albums => {
    res.status(200).json(albums)
  })
  .catch(err => {
    next(err)
  })
}

module.exports.getAlbum = (req, res, next) => {
  Album.getOneAlbum(req.params.albumId)
  .then(album => {
    res.status(200).json(album)
  })
  .catch(err => {
    next(err)
  })
}

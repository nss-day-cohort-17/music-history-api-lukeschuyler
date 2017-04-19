'use strict'

// <require a song model>
// < use model methods for getting all songs and one song then send the response back with the data>
// <stretch goal: methods for adding, deleting, editing a song>
const Song = require('../models/song')

module.exports.getSongs = (req, res, next) => {
  Song.getAllSongs()
  .then(songs => {
    res.status(200).json(songs)
  })
  .catch(err => {
    next(err)
  })
}

module.exports.getSong = (req, res, next) => {
  Song.getOneSong(req.params.id)
  .then(song => {
    res.status(200).json(song)
  })
  .catch(err => {
    next(err)
  })
}

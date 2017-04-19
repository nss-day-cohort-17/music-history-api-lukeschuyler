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
  Song.getOneSong(req.params.songId)
  .then(song => {
    res.status(200).json(song)
  })
  .catch(err => {
    next(err)
  })
}

module.exports.addNewSong = (req, res, next) => {
  console.log(req.body)
  Song.addSong(req.body)
  .then((data) => {
    res.status(200).json(data)
  })
  .catch(err => {
    next(err)
  })
}

module.exports.deleteSong = (req, res, next) => {
  Song.deleteSong(req.params.songId)
  .then(res => {
    res.status(200).json(res)
  })
  .catch(err => {
    next(err)
  })
}

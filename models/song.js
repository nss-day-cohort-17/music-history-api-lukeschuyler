'use strict'

// <Define a model using bookshelf that describes a song object, as well as 
// static methods for getting one or all songs from the db>

// When adding the 'table' property use your old friend DB Browser for SQLite to 
// open up the musichistory db and inspect the tables. Add the appropriate table name for 
// interfacing with the songs collection
const { bookshelf } = require('../db/database')
require('./album')

const Song = bookshelf.Model.extend({
  tableName: 'Song',
  artist: function() { return this.belongsTo('Album') }
}, {
  getAllSongs() {
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(err => err)
  },
  getOneSong(songId) {
    return this.forge({songId})
    .fetch()
    .then(row => row)
    .catch(err => err)
  },
  addSong(song) {
    return this.forge(song)
    .save()
    .then(id => id)
    .catch(err => err)
  },
  deleteSong(SongId) {
    return Song.forge().where({ SongId })
    .destroy()
  }
})

module.exports = bookshelf.model('Song', Song);

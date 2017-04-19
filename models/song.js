'use strict'

// <Define a model using bookshelf that describes a song object, as well as 
// static methods for getting one or all songs from the db>

// When adding the 'table' property use your old friend DB Browser for SQLite to 
// open up the musichistory db and inspect the tables. Add the appropriate table name for 
// interfacing with the songs collection
const { bookshelf } = require('../db/database')

const Song = bookshelf.Model.extend({
  tableName: 'Song'
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
  }
})

module.exports = bookshelf.model('Song', Song);

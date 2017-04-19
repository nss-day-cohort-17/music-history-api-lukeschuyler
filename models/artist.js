'use strict'

const { bookshelf } = require('../db/database')

const Artist = bookshelf.Model.extend({
  tableName: 'Artist'
}, {
  getAllArtists() {
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(err => err)
  },
  getOneArtist(artistId) {
    return this.forge({artistId})
    .fetch()
    .then(row => row)
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Artist', Artist);

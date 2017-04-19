'use strict'

const { bookshelf } = require('../db/database')

const Album = bookshelf.Model.extend({
  tableName: 'Album'
}, {
  getAllAlbums() {
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(err => err)
  },
  getOneAlbum(albumId) {
    return this.forge({albumId})
    .fetch()
    .then(row => row)
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Album', Album);

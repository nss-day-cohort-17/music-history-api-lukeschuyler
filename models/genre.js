'use strict'

const { bookshelf } = require('../db/database')

const Genre = bookshelf.Model.extend({
  tableName: 'Genre'
}, {
  getAllGenres() {
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(err => err)
  },
  getOneGenre(genreId) {
    return this.forge({genreId})
    .fetch()
    .then(row => row)
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Genre', Genre);

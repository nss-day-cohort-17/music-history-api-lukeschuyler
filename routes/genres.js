'use strict'

const { Router } = require('express')
const router = Router()
const { getGenres, getGenre } = require('../controllers/genreCtrl')

router.get('/genres', getGenres)
router.get('/genres/:genreId', getGenre)

module.exports = router;

'use strict';

const { Router } = require('express')
const router = Router();
const { getArtists, getArtist } = require('../controllers/artistCtrl')

router.get('/artists', getArtists)
router.get('/artists/:artistId', getArtist)

module.exports = router;

'use strict';

const { Router } = require('express')
const router = Router();
const { getAlbums, getAlbum } = require('../controllers/albumCtrl')

router.get('/albums', getAlbums)
router.get('/albums/:albumId', getAlbum)

module.exports = router;

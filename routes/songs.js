'use strict';

// <require the express Router>
// <require the songCtrl to get access to its methods>
// <define routes for getting all songs and a single song>
// <stretch: define routes for posting, deleting, editing a song>
const { Router } = require('express')
const router = Router();
const { getSongs, getSong, deleteSong, addNewSong } = require('../controllers/songCtrl')

router.get('/songs', getSongs)
router.get('/songs/:songId', getSong)
router.delete('/songs/:songId', deleteSong)
router.post('/songs', addNewSong)

module.exports = router;

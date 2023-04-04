const express = require('express')
const router = express.Router()
const journalController = require('../../controllers/journalController')

router.route('/')
    .get(journalController.getJournalsByUserId)
    .post(journalController.createNewJournal)
    
module.exports = router
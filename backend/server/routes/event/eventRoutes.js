const express = require('express')
const router = express.Router()
const eventController = require('../../controllers/eventController')

router.route('/')
    .get(eventController.getEventsByTag)
    .post(eventController.createNewEvent)

router.route('/suggest')
    .post(eventController.suggestEvents)
    
module.exports = router
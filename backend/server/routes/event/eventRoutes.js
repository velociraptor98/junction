const express = require('express')
const router = express.Router()
const eventController = require('../../controllers/eventController')

router.route('/')
    .get(eventController.getEventsByTag)
    .post(eventController.createNewEvent)
    
module.exports = router
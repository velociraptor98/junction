const Event = require('../models/Event');
const asyncHandler = require("express-async-handler"); // asyncHandler is used to wrap async functions in try/catch blocks

// @desc    Get all events by tag
// @route   GET /events/:tag
// @access  Public

const getEventsByTag = asyncHandler(async (req, res) => {
    
    req.query.tag = req.query.tag.replace(/['"]+/g, '');

    const tag = req.query.tag;

    if (!tag) {
        return res.status(400).json({ message: "Please provide a tag" });
    }

    const events = await Event.find({ tags: tag }).lean().exec();
    
    if (!events || !events.length) {
        return res.status(404).json({ message: "No events found for this tag" });
    }

    res.status(200).json(events);
});

// @desc    Create new event
// @route   POST /events
// @access  Public

const createNewEvent = asyncHandler(async (req, res) => {
    const { name, description, date, organiser_info, location, sponsored, image, tags } = req.body;

    // confirm data
    if (!name || !description || !organiser_info || !image || !tags) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    const eventObj = { name, description, organiser_info, location, sponsored, image, tags };

    const event = await Event.create(eventObj); // create and save event to db

    if (!event) {
        return res.status(500).json({ message: "Error creating event" });
    }

    res.status(201).json(`Event created successfully`);
});

module.exports = { getEventsByTag, createNewEvent };


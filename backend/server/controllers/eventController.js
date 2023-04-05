const Event = require('../models/Event');
const User = require('../models/User');

const asyncHandler = require("express-async-handler"); // asyncHandler is used to wrap async functions in try/catch blocks


// @desc    Suggest events by tag and the top tags for the user
// @route   POST /events/suggest
// @access  Public

const suggestEvents = asyncHandler(async (req, res) => {
    const { tags, user_id } = req.body;

    if (!tags || !tags.length) {
        return res.status(400).json({ message: "Please provide at least one tag" });
    }


    // get user's top tags
    const topTags = await User.findById(user_id).select('topTags').lean().exec();

    const tag = tags


    if (topTags.topTags[tag]) {
        topTags.topTags[tag] += 1;
    } else {
        topTags.topTags[tag] = 1;
    }
    console.log(topTags);

    // save topTags to db
    const saveTopTags = await User.findByIdAndUpdate(user_id, { topTags: topTags.topTags }, { new: true }).lean().exec();

    if (!saveTopTags) {
        return res.status(500).json({ message: "Error saving top tags" });
    }

    // get top 3 tags
    const allTags = Object.keys(topTags.topTags).sort((a, b) => topTags.topTags[b] - topTags.topTags[a]).slice(0, 3);

    const suggestedEvents = await Event.find({ tags: { $in: allTags } }).limit(10).lean().exec();

    if (!suggestedEvents || !suggestedEvents.length) {
        return res.status(404).json({ message: "No suggested events for the user!" });
    }

    res.status(200).json(suggestedEvents);
});


// @desc    Get all events by tags
// @route   GET /events/:tag
// @access  Public

const getEventsByTag = asyncHandler(async (req, res) => {
    
    req.query.tag = req.query.tag.replace(/['"]+/g, '');

    const tag = req.query.tag;

    if (!tag) {
        return res.status(400).json({ message: "Please provide a tag" });
    }

    // return 5 events with the tag
    const events = await Event.find({ tags: tag }).limit(5).lean().exec();

    
    if (!events || !events.length) {
        return res.status(404).json({ message: "No events found for this tag" });
    }

    res.status(200).json(events);
});

// @desc    Get tags of the event
// @route   POST /events/tags
// @access  Public

const getTagsByEventId = asyncHandler(async (req, res) => {
    const event_id = req.body.event_id;
    const tag_value = req.body.tag_value;
    const user_id = req.body.user_id || '642d1f20983a3dc6e57523bd'; 

    if (!event_id) {
        return res.status(400).json({ message: "Please provide an event id" });
    }

    // get the event tags
    const tags = await Event.findById(event_id).select('tags').lean().exec();

    if (!tags) {
        return res.status(404).json({ message: "No tags found for this event" });
    }

    // get user's top tags
    const topTags = await User.findById(user_id).select('topTags').lean().exec();

    // for each tag
    tags.tags.forEach(tag => {
        // check if tag exists in topTags
        if (topTags.topTags[tag]) {
            if(tag_value == 1){
                topTags.topTags[tag] += 1;
            }else{
                topTags.topTags[tag] -= 1;
            }
        } else {
            if(tag_value == 1){
                topTags.topTags[tag] = 1;
            }else{
                topTags.topTags[tag] = 0;
            }
        }

    });

    // save topTags to db
    const saveTopTags = await User.findByIdAndUpdate(user_id, { topTags: topTags.topTags }, { new: true }).lean().exec();

    if (!saveTopTags) {
        return res.status(500).json({ message: "Error saving top tags" });
    }

    return res.status(200).json('Tags updated successfully');

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

    const eventObj = { name, description, date, organiser_info, location, sponsored, image, tags };

    const event = await Event.create(eventObj); // create and save event to db

    if (!event) {
        return res.status(500).json({ message: "Error creating event" });
    }

    res.status(201).json(`Event created successfully`);
});

module.exports = { getEventsByTag, createNewEvent, suggestEvents, getTagsByEventId };


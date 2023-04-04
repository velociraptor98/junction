const Journal = require('../models/Journal');
const asyncHandler = require("express-async-handler"); // asyncHandler is used to wrap async functions in try/catch blocks
const bcrypt = require("bcrypt"); // bcrypt is used to hash passwords


// @desc    Get all journals by id
// @route   GET /journals/:id
// @access  Public

const getJournalsByUserId = asyncHandler(async (req, res) => {
    const user_id = req.query.user_id;
    
    if (!user_id) {
        return res.status(400).json({ message: "Please provide an user id" });
    }

    const journal = await Journal.find({ userId: user_id }).lean().exec();

    if (!journal || !journal.length) {
        return res.status(404).json({ message: "No journal found for this user" });
    }

    res.status(200).json(journal);
});

// @desc    Create new journal
// @route   POST /journals
// @access  Public

const createNewJournal = asyncHandler(async (req, res) => {
    const { userId, text, tags } = req.body;

    // confirm data
    if (!userId || !text || !tags) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    const journalObj = { userId, text, tags };

    const journal = await Journal.create(journalObj); // create and save journal to db

    if (!journal) {
        return res.status(500).json({ message: "Error creating journal" });
    }

    res.status(201).json(`Journal created successfully`);
});

module.exports = { getJournalsByUserId, createNewJournal };

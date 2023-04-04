const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Journal = mongoose.model('Journal', Schema);

module.exports = Journal;
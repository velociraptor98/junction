const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    lastActivity: {
        type: Date,
        default: Date.now,
    },
    lastSentiment: {
        type: String,
        default: 'happy',
    },
    topTags: {
        type: Object,
        default: {
            happy: 0,
            sad: 0,
            angry: 0,
            estatic: 0,
            indifferent: 0,
        },
    },
});

const User = mongoose.model('User', Schema);

module.exports = User;
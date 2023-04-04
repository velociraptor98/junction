const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    organiser_info: {
        type: Object,
        required: true,
    },
    location: {
        type: String,
    },
    sponsored: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    }
},
{
    timestamps: true,
});

const Event = mongoose.model('Event', Schema);

module.exports = Event;
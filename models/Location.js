const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    cityId: {
        type: Number
    }
});

module.exports = Location = mongoose.model('location', LocationSchema);

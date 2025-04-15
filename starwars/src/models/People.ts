const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number, 
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    year: {
        type: Number,  
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Character', CharacterSchema); 
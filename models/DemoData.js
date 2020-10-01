const mongoose = require('mongoose');

const DemoDataSchema = new mongoose.Schema({
    id:{
        type: Number,
        trim: true
    },
    title:{
        type: String,
        trim: true
    },
    author:{
        type: String,
        trim: true
    },
    developer:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('DemoData', DemoDataSchema);
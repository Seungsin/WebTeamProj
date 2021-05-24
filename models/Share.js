const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShareSchema = new Schema({
    title: String,
    body: String,
    gate: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    datePosted: {
        type:Date,
        default: new Date()
    },
    image: String
});

const Share = mongoose.model('Share', ShareSchema);
module.exports = Share
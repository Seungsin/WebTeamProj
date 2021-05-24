const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShareConsume2Schema = new Schema({
    title: String,
    body: String,
    gate: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    people: Integer,
    minimum: Integer,
    datePosted: {
        type:Date,
        default: new Date()
    },
    image: String,
    comments: [{
        body: String,
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        },
        people: Integer,
        paying: String
    }],
    account: String
});

const ShareConsume2 = mongoose.model('ShareConsume2', ShareConsume2Schema);
module.exports = ShareConsume2
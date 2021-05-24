const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShareConsume1Schema = new Schema({
    title: String,
    body: String,
    gate: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    buying: Integer,
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
        buying: Integer,
        paying: String
    }],
    account: String
});

const ShareConsume1 = mongoose.model('ShareConsume1', ShareConsume1Schema);
module.exports = ShareConsume1
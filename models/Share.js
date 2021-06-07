const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShareSchema = new Schema({
    title: String,
    body: String,
    gate: String,
    isfinished:{
        type:Number,
        default:0
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    deadline: {
        type:Date,
        default: new Date()
    },
    image: String,
    comments: [{
        content: String,
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        }
    }]
});

const Share = mongoose.model('Share', ShareSchema);
module.exports = Share
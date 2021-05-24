const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ExchangeSchema = new Schema({
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
    image: String,
    comments: [{
        body: String,
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        }
    }]
});

const Exchange = mongoose.model('Exchange', ExchangeSchema);
module.exports = Exchange
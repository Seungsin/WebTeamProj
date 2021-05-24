const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CobuyingSchema = new Schema({
    option: Integer,
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

const Cobuying = mongoose.model('Cobuying', CobuyingSchema);
module.exports = Cobuying
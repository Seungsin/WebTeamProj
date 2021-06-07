const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ExchangeSchema = new Schema({
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
        },
        username:String
    }]
});

const Exchange = mongoose.model('Exchange', ExchangeSchema);
module.exports = Exchange
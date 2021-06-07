const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CobuyingSchema = new Schema({
    option: {type : Number},
    title: String,
    body: String,
    gate: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    buying: {
        type : Number,
        default: 0
    },
    sum:{
        type : Number,
        default: 0
    },
    minimum: {type : Number},
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
        buying: {
            type : Number,
            default : 0
        },
        paying: String
    }],
    // comments:[],
    account: String
});

const Cobuying = mongoose.model('Cobuying', CobuyingSchema);
module.exports = Cobuying
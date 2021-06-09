const e = require('express')
const { findById } = require('../models/Cobuying.js')
const Cobuying = require('../models/Cobuying.js')
const Exchange = require('../models/Exchange.js')
const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    const db = [Cobuying, Exchange, Share]
    const goto = ["/cobuying", "/exchange", "/share"]
    const goto2 = ["/cobuyingpost/", "/exchangepost/", "/sharepost/"]
    const what = req.query.what
    const where = req.query.where
    
    if(what==0){
        await db[where].findByIdAndDelete(req.params.id)
        return res.redirect(goto[where])
    }else if(what==1){
        let comment = (await db[where].findById(req.params.id)).comments
        comment.splice(req.query.place, 1)
        // console.log(req.query.place)
        console.log(comment)
        await db[where].findByIdAndUpdate(req.params.id, {"comments":comment}, function(err, docs){})
        return res.redirect(goto2[where]+req.params.id)
        // return res.render('/')
    }
}
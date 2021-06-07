const Exchange = require('../models/Exchange.js')

module.exports = async (req, res)=>{
    const post = req.params.id
    const comment = {
        content: req.body.content,
        userid: req.session.userId,
    }
    await Exchange.findByIdAndUpdate(post, {$addToSet:{"comments" : comment}}, function(err, docs){

    })

    res.redirect('/exchangepost/'+post)
}
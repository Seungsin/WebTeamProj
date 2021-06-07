const Share = require('../models/Share.js')

module.exports = async (req, res)=>{
    const post = req.params.id
    const comment = {
        content: req.body.content,
        userid: req.session.userId,
    }
    await Share.findByIdAndUpdate(post, {$addToSet:{"comments" : comment}}, function(err, docs){

    })

    res.redirect('/sharepost/'+post)
}
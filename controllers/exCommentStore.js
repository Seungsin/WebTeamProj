const Exchange = require('../models/Exchange.js')
const Name = require('../models/User')

module.exports = async (req, res)=>{
    const post = req.params.id
    const name = await Name.findById(req.session.userId)
    const comment = {
        content: req.body.content,
        userid: req.session.userId,
        username: name.username,
    }
    await Exchange.findByIdAndUpdate(post, {$addToSet:{"comments" : comment}}, function(err, docs){

    })

    res.redirect('/exchangepost/'+post)
}
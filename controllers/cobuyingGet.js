const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const post = await (await Cobuying.findById(req.params.id))
    const isOwner = 0
    if(post.userid == req.session.userId) isOwner=1
    res.render('cobuyingpost', {
        post, isOwner
    })
}
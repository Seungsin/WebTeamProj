const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const post = await (await Cobuying.findById(req.params.id))
    let isOwner = 0
    if(post.userid == req.session.userId) isOwner=1
    post.isOwner=isOwner
    res.render('cobuyingpost', {
        post
    })
}
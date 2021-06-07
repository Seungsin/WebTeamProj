const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const post = await(await Exchange.findById(req.params.id))
    let isOwner = 0
    if(post.userid == req.session.userId) isOwner=1
    post.isOwner=isOwner
    res.render('exchangepost', {
        post
    })
}
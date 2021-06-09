const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    const post = await (await Share.findById(req.params.id))
    let isOwner = 0
    if(post.userid == req.session.userId) isOwner=1
    post.isOwner=isOwner
    post.myid = req.session.userId
    
    res.render('sharepost', {
        post
    })
}
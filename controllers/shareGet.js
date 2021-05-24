const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    const post = await (await Share.findById(req.params.id)).populated('userid')
    res.render('post', {
        post
    })
}
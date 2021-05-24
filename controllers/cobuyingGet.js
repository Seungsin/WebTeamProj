const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const post = await (await Cobuying.findById(req.params.id)).populated('userid')
    res.render('post', {
        post
    })
}
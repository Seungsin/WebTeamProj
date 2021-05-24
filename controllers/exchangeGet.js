const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const post = await (await Exchange.findById(req.params.id)).populated('userid')
    res.render('post', {
        post
    })
}
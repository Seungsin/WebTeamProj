const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const post = await (await Exchange.findById(req.params.id))
    res.render('exchangepost', {
        post
    })
}
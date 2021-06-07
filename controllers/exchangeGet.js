const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const post = await(await Exchange.findById(req.params.id))
    console.log(post)
    res.render('exchangepost', {
        post
    })
}
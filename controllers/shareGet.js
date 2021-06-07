const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    const post = await (await Share.findById(req.params.id))
    res.render('sharepost', {
        post
    })
}
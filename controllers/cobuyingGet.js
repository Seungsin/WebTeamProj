const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const post = await (await Cobuying.findById(req.params.id))
    res.render('cobuyingpost', {
        post
    })
}
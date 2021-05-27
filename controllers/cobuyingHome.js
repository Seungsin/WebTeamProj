const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const posts = await Cobuying.find({}).populate('userid')
    res.render('cobuying',{
        posts
    });
}
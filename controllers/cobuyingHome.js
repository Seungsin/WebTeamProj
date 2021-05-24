const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const posts = await Cobuying.find({}).populate('userid')
    console.log(req.session)
    res.render('index',{
        posts
    });
}
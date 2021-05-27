const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    const posts = await Share.find({}).populate('userid')
    res.render('share',{
        posts
    });
}
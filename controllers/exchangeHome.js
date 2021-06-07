const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const posts = await Exchange.find({}).populate('userid')
    res.render('exchange',{
        posts
    });
}
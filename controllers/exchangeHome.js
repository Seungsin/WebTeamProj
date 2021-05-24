const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const posts = await Exchange.find({}).populate('userid')
    console.log(req.session)
    res.render('index',{
        posts
    });
}
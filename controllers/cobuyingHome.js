const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    const now = new Date()
    const modify = await Cobuying.find({"deadline":{$lt:now},"isfinished":0})
    
    for(var i=0;i<modify.length;i++){
        await Cobuying.findByIdAndUpdate(modify[i].id, {"isfinished":1}, function(err, docs){})
    }
    const posts = await Cobuying.find({}).sort({"isfinished":1, "deadline":1}).populate('userid')
    res.render('cobuying',{
        posts
    });
}
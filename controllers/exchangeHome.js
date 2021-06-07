const Exchange = require('../models/Exchange.js')

module.exports = async (req, res) =>{
    const now = new Date()
    const modify = await Exchange.find({"deadline":{$lt:now},"isfinished":0})
    
    for(var i=0;i<modify.length;i++){
        await Exchange.findByIdAndUpdate(modify[i].id, {"isfinished":1}, function(err, docs){})
    }
    const posts = await Exchange.find({}).sort({"isfinished":1, "deadline":1}).populate('userid')
    res.render('exchange',{
        posts
    });
}
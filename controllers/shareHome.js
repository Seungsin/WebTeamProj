const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    const now = new Date()
    const modify = await Share.find({"deadline":{$lt:now},"isfinished":0})
    
    for(var i=0;i<modify.length;i++){
        await Share.findByIdAndUpdate(modify[i].id, {"isfinished":1}, function(err, docs){})
    }
    const posts = await Share.find({}).sort({"isfinished":1, "deadline":1}).populate('userid')
    res.render('share',{
        posts
    });
}
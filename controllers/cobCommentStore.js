const Cobuying = require('../models/Cobuying.js')
const Name = require('../models/User')

module.exports = async (req, res)=>{
    const post = req.params.id
    const buying = await (await Cobuying.findById(req.params.id))
    const name = await Name.findById(req.session.userId)
    const change = Number(buying.sum)+Number(req.body.buying)
    const comment = {
        content: req.body.content,
        userid: req.session.userId,
        username: name.username,
        buying: req.body.buying,
        paying: "None"
    }
    await Cobuying.findByIdAndUpdate(post, {$addToSet:{"comments" : comment}}, function(err, docs){
    })
    await Cobuying.findByIdAndUpdate(post, {"sum":change}, function(err, docs){
    })
    
    res.redirect('/cobuyingpost/'+post)
}
const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res)=>{
    const post = req.params.id
    const buying = await (await Cobuying.findById(req.params.id))
    const change = Number(buying.sum)+Number(req.body.buying)
    const comment = {
        content: req.body.content,
        userid: req.session.userId,
        buying: req.body.buying,
        paying: "None"
    }
    await Cobuying.findByIdAndUpdate(post, {$addToSet:{"comments" : comment}}, function(err, docs){

    })
    await Cobuying.findByIdAndUpdate(post, {"sum":change}, function(err, docs){

    })
    
    res.redirect('/cobuyingpost/'+post)
}

// module.exports = async (req, res) =>{
//     const post = await (await Cobuying.findById(req.params.id))
    
//     res.render('cobuyingpost', {
//         post
//     })
// }
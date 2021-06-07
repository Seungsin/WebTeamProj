const Cobuying = require('../models/Cobuying.js')

module.exports = async (req, res) =>{
    await Cobuying.findByIdAndUpdate(req.params.id, {"isfinished":1}, function(err, docs){})
    res.redirect('/cobuyingpost/'+req.params.id)
}
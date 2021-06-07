const Share = require('../models/Share.js')

module.exports = async (req, res) =>{
    await Share.findByIdAndUpdate(req.params.id, {"isfinished":1}, function(err, docs){})
    res.redirect('/sharepost/'+req.params.id)
}
const Exchange = require('../models/Exchange')

module.exports = async (req, res) =>{
    await Exchange.findByIdAndUpdate(req.params.id, {"isfinished":1}, function(err, docs){})
    res.redirect('/exchangepost/'+req.params.id)
}
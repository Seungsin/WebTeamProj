const Share = require('../models/Share.js')
const path = require('path')

module.exports = (req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..','public/assets/img', image.name), async (error)=>{
        await Share.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            userid: req.session.userId
        })
        
        res.redirect('/')
    })
}
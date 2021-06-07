const Cobuying = require('../models/Cobuying.js')
const path = require('path')

module.exports = async (req, res)=>{
    let image={};
    if(!req.files){
        image.name="baisic.jpg"
        await Cobuying.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            userid: req.session.userId
        })
        
        res.redirect('/cobuying')
    }else{
        image=req.files.image
        image.mv(path.resolve(__dirname, '..','public/assets/img', image.name), async (error)=>{
            await Cobuying.create({
                ...req.body,
                image: '/assets/img/'+image.name,
                userid: req.session.userId
            })
            
            res.redirect('/cobuying')
        })
    }
}
const Exchange = require('../models/Exchange.js')
const path = require('path')

module.exports = async (req, res)=>{
    let image={};
    if(!req.body.imgUrl){
        image.name="baisic.jpg"
        await Exchange.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            userid: req.session.userId
        })
        
        res.redirect('/exchange')
    }else{
        image=req.body.imgUrl
            await Exchange.create({
                ...req.body,
                image: image,
                userid: req.session.userId
            })
            
            res.redirect('/exchange')
    }
}
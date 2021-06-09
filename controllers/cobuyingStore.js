const Cobuying = require('../models/Cobuying.js')
const path = require('path')

module.exports = async (req, res)=>{
    let image={};
    let sum=req.body.buying;
    if(!req.body.imgUrl){
        image.name="baisic.jpg"
        await Cobuying.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            sum:sum,
            userid: req.session.userId
        })
        
        res.redirect('/cobuying')
    }else{
        image=req.body.imgUrl
            await Cobuying.create({
                ...req.body,
                image: image,
                sum:sum,
                userid: req.session.userId
            })
            
            res.redirect('/cobuying')
    }
}
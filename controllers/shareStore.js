const Share = require('../models/Share.js')
const path = require('path');
const { sensitiveHeaders } = require('http2');

module.exports = async (req, res)=>{
    let image={};
    if(!req.body.imgUrl){
        image.name="baisic.jpg"
        await Share.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            userid: req.session.userId
        })
        
        res.redirect('/share')
    }else{
        image=req.body.imgUrl
            await Share.create({
                ...req.body,
                image: req.body.imgUrl,
                userid: req.session.userId
            })
            
            res.redirect('/share')
    }
}
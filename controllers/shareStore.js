const Share = require('../models/Share.js')
const path = require('path');
const { sensitiveHeaders } = require('http2');

module.exports = async (req, res)=>{
    let image={};
    if(!req.files){
        image.name="baisic.jpg"
        await Share.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            userid: req.session.userId
        })
        
        res.redirect('/share')
    }else{
        image=req.files.image
        image.mv(path.resolve(__dirname, '..','public/assets/img', image.name), async (error)=>{
            await Share.create({
                ...req.body,
                image: '/assets/img/'+image.name,
                userid: req.session.userId
            })
            
            res.redirect('/share')
        })
    }
}
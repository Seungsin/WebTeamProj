const Exchange = require('../models/Exchange.js')
const path = require('path')

module.exports = async (req, res)=>{
    let image={};
    if(!req.files){
        image.name="baisic.jpg"
        await Exchange.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            userid: req.session.userId
        })
        
        res.redirect('/exchange')
    }else{
        image=req.files.image
        image.mv(path.resolve(__dirname, '..','public/assets/img', image.name), async (error)=>{
            await Excahnge.create({
                ...req.body,
                image: '/assets/img/'+image.name,
                userid: req.session.userId
            })
            
            res.redirect('/exchange')
        })
    }
}
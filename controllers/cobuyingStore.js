const Cobuying = require('../models/Cobuying.js')
const path = require('path')

const {Storage} = require('@google-cloud/storage');

const projectId = 'ShareConsumeProj'
const keyFilename = 'AIzaSyCUFHKXhJpjJY3SsJQKoVyB_g0-FAGY65o'
const storage = new Storage({projectId, keyFilename});

module.exports = async (req, res)=>{
    let image={};
    let sum=req.body.buying;
    if(!req.files){
        image.name="baisic.jpg"
        await Cobuying.create({
            ...req.body,
            image: '/assets/img/'+image.name,
            sum:sum,
            userid: req.session.userId
        })
        
        res.redirect('/cobuying')
    }else{
        image=req.files.image
        paths = path.resolve(__dirname, '..','public/assets/img', image.name)
        image.mv(paths, async (error)=>{
            uploadFile(paths, image.name).catch(console.error);
            await Cobuying.create({
                ...req.body,
                image: 'https://storage.googleapis.com/consum_proj/'+image.name,
                sum:sum,
                userid: req.session.userId
            })
            
            res.redirect('/cobuying')
        })
    }
}

async function uploadFile(filePath, name) {
    await storage.bucket('consum_proj').upload(filePath, {
      destination: name,
    });
  
    console.log(`${filePath} uploaded to ${consum_proj}`);
  }
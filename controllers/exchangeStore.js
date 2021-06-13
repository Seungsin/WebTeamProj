const Exchange = require('../models/Exchange.js')
const path = require('path')

const {Storage} = require('@google-cloud/storage');

const projectId = 'ShareConsumeProj'
const keyFilename = 'google-credentials.json'
const storage = new Storage({projectId, keyFilename});

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
        paths = path.resolve(__dirname, '..','public/assets/img', image.name)
        image.mv(paths, async (error)=>{
            uploadFile(paths, image.name).catch(console.error);
            await Exchange.create({
                ...req.body,
                image: 'https://storage.googleapis.com/consum_proj/'+image.name,       
                userid: req.session.userId
            })
            
            res.redirect('/exchange')
        })
    }
}

async function uploadFile(filePath, name) {
    await storage.bucket('consum_proj').upload(filePath, {
      destination: name,
    });
  
    console.log(`${filePath} uploaded to ${consum_proj}`);
  }

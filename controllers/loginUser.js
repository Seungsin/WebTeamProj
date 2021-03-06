const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const {username, password} = req.body

    User.findOne({username:username}, (error, user) =>{
        if(user){
            bcrypt.compare(password, user.password, (error, same)=>{
                if(same){
                    req.session.userId = user._id
                    req.session.userName = user.username
                    if(!req.session.returnTo) res.redirect('/')
                    else res.redirect(req.session.returnTo)
                }
                else{
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
}
module.exports = (req, res) =>{
    if(req.session.userId){
        return res.render('newcobuying')
    }
    res.redirect('/auth/login')
}
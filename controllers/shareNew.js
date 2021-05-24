module.exports = (req, res) =>{
    if(req.session.userId){
        return res.render('newshare')
    }
    res.redirect('/auth/login')
}
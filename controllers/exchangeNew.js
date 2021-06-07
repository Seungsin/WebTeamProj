module.exports = (req, res) =>{
    if(req.session.userId){
        return res.render('newexchange')
    }
    res.redirect('/auth/login')
}
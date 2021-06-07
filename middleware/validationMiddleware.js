module.exports = (req, res, next)=>{
    if(req.body.title == null || req.body.body == null){
        alert("필수 항목을 작성해주세요!")
        return res.redirect('/posts/new')
    }
    next()
}
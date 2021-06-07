const express=require('express');
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')

const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database'), {useNewUrlParser:true}

const cobuyingGetController = require('./controllers/cobuyingGet')
const cobuyingHomeController = require('./controllers/cobuyingHome')
const cobuyingNewController = require('./controllers/cobuyingNew')
const cobuyingStoreController = require('./controllers/cobuyingStore')

const exchangeGetController = require('./controllers/exchangeGet')
const exchangeHomeController = require('./controllers/exchangeHome')
const exchangeNewController = require('./controllers/exchangeNew')
const exchangeStoreController = require('./controllers/exchangeStore')

const shareGetController = require('./controllers/shareGet')
const shareHomeController = require('./controllers/shareHome')
const shareNewController = require('./controllers/shareNew')
const shareStoreController = require('./controllers/shareStore')

const mainController = require('./controllers/main')

const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const storeUserController = require('./controllers/storeUser')
const newUserController = require('./controllers/newUser')

const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const validateMiddleWare = require('./middleware/validationMiddleware')
const authMiddleware = require('./middleware/authMiddleware')

const cobCommentController = require('./controllers/cobCommentStore')
const exCommentController = require('./controllers/exCommentStore')
const shCommentController = require('./controllers/shCommentStore')

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret:'keyboard cat'
}))

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.use("*", (req, res, next)=>{
    loggedIn = req.session.userId;
    next()
})

// new posts
app.use('/newcobuying/store', validateMiddleWare)
app.use('/newexchange/store', validateMiddleWare)
app.use('/newshare/store', validateMiddleWare)


// 로그인, 회원가입
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

//main pages
app.get('/', mainController)
app.get('/cobuying', cobuyingHomeController)
app.get('/exchange', exchangeHomeController)
app.get('/share', shareHomeController)

//post
app.get('/cobuyingpost/:id', cobuyingGetController)
app.get('/exchangepost/:id', exchangeGetController)
app.get('/sharepost/:id', shareGetController)

//new post
app.get('/newcobuying', authMiddleware, cobuyingNewController)
app.get('/newexchange', authMiddleware, exchangeNewController)
app.get('/newshare', authMiddleware, shareNewController)
app.post('/newcobuying/store', authMiddleware, cobuyingStoreController)
app.post('/newexchange/store', authMiddleware, exchangeStoreController)
app.post('/newshare/store', authMiddleware, shareStoreController)

//comment
app.post('/cobuyingpost/newcomment/:id',authMiddleware, cobCommentController)
app.post('/exchangepost/newcomment/:id',authMiddleware, exCommentController)
app.post('/sharepost/newcomment/:id',authMiddleware, shCommentController)
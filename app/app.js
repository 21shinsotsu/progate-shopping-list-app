const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

const createRouter = require('./routers/create');
const deleteRouter = require('./routers/delete');
const editRouter = require('./routers/edit');
const indexRouter = require('./routers/index');
const updateRouter = require('./routers/update');
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');
const logoutRouter = require('./routers/logout');


// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));


app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = 'ゲスト';
    res.locals.isLoggedIn = false;
  } else {
    res.locals.userId = req.session.userId;
    res.locals.username = req.session.username;
    res.locals.isLoggedIn = true;
  }
  next();
});

// api
app.get('/', (req, res) => { res.render('top'); });
app.get('/signup', signupRouter.getRouter);
app.post('/signup',signupRouter.checkInput, signupRouter.checkEmail, signupRouter.register);
app.get('/login', (req, res) => { res.render('login'); });
app.post('/login', loginRouter);
app.get('/logout', logoutRouter);
app.get('/new', (req, res) => { res.render('new'); });
app.get('/index/:userId', indexRouter);
app.post('/create', createRouter);
app.post('/delete/:itemId', deleteRouter);
app.get('/edit/:itemId', editRouter);
app.post('/update/:itemId', updateRouter);

// start the server
app.listen(3000, () => {
  console.log("listening: http://localhost:3000")
});

const express = require('express');
const path = require('path');
const app = express();

const createRouter = require('./routes/create');
const deleteRouter = require('./routes/delete');
const editRouter = require('./routes/edit');
const indexRouter = require('./routes/index');
const updateRouter = require('./routes/update');

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

// api
app.get('/', (req, res) => { res.render('top'); });
app.get('/new', (req, res) => { res.render('new'); });
app.get('/index', indexRouter);
app.post('/create', createRouter);
app.post('/delete/:id', deleteRouter);
app.get('/edit/:id', editRouter);
app.post('/update/:id', updateRouter);

// start the server
app.listen(3000, () => {
  console.log("listening: http://localhost:3000")
});

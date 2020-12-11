const express = require('express');
const path = require('path');
//const morgan = require('morgan');
var handlebars  = require('express-handlebars');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
//app.use(morgan('combined'))


//template.engine

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  console.log(req.query.q);
  res.render('news');
});

app.get('/search', (req, res) => {
  //console.log(req.query.q);
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
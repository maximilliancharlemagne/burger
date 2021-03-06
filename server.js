require('dotenv').config()

const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./controllers/burgers_controller')
const path = require('path')
const app = express();

app.use('/api',router)
app.use(express.static(path.join(__dirname, '/public')))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(process.env.PORT, () =>  console.log('http://localhost:3000'));
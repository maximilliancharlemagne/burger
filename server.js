const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./controllers/burgers_controller')

const app = express();

app.use(router,'/api')
app.use(express.static(path.join(__dirname, '/public')))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000);
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/controller', express.static('controller'));
app.use('/category', require('./routes/category'));
app.use('/publicCode', require('./routes/publicCode'));

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('../index.html'));

app.listen(3000);

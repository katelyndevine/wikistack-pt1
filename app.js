const morgan = require('morgan');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const staticMiddleware = express.static(path.join(__dirname, 'public'));

app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
  res.send('hello world');
});

const PORT = 1330;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

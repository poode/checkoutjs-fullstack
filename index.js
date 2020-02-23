const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const {config} = require('dotenv');

const { getUserData } = require('./service');

const port = 3000;
const app = express();
config();

app.use('/', express.static('./public'));

app.use(express.json());
app.engine('html', es6Renderer);
app.set('views', 'public');
app.set('view engine', 'html');

app.get('/checkout', (req, res, next) => {
  res.render('index', { locals: { publicKey: process.env.PUBLIC_KEY, secretKey: process.env.SECRET_KEY, serverURL: `${req.hostname}:${port}/get-user-data` } });
});

app.post('/get-user-data', async (req, res, next) => {
  const respose = await getUserData({sandbox: true, secretKey: process.env.SECRET_KEY, requestBody: req.body });
  res.json(respose);
});


app.use('*', (req, res) => {
  res.status(404).json({ message: 'not found'});
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

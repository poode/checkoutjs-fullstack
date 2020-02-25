const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const { config } = require('dotenv');
const cors = require('cors');

const { getUserData } = require('./service');

const app = express();
config();
const port = process.env.PORT || 3001;

app.use('/', express.static('./public'));
app.use(cors());
app.use(express.json());
app.engine('html', es6Renderer);
app.set('views', 'public');
app.set('view engine', 'html');

app.get('/', (req, res, next) => {
  res.render('file', { locals: { publicKey: process.env.PUBLIC_KEY, secretKey: process.env.SECRET_KEY, serverURL: `${req.hostname}:${port}/get-user-data` } });
});

app.post('/get-user-data', async (req, res, next) => {
  console.log(req.body)
  try {
    const respose = await getUserData({sandbox: true, secretKey: process.env.SECRET_KEY, requestBody: req.body });
    res.json(respose);
  } catch (error) {
    res.status(500).json({ message: 'SomeThing Went Wrong' });
  }
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

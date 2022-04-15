const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const auth = require('./middleware/auth.middleware');
const api = require('./routes/api.route');
const metamask = require('./routes/metamask.route');
const db = require('./models');

// implement app express
const app = express();

// implement cors policy
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// implement session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// implement database
db.sequelize.sync({
  force: true,
});

// const sdk = require('api')('@opensea/v1.0#bg4ikl1mk428b');
//
// sdk['retrieving-a-single-contract']({
//   asset_contract_address: '0x11450058d796b02eb53e65374be59cff65d3fe7f',
//   'X-API-KEY': ''
// })
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// implement routes
app.use('/api/', auth, api);
app.use('/metamask/', metamask);
app.get('/', (req, res) => {
  const sess = req.session;
  if (sess.token) {
    return res.redirect('/api/');
  }
  return res.json('Welcome');
});

// start server
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

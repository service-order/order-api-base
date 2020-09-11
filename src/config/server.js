const _express = require('express');
const _bodyp = require('body-parser');

const application = _express();

application.use('/', (req, res) => {
  return res.send('deu certo');
});

module.exports = application;

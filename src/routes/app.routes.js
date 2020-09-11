'use strict';

const _express = require('express');
const router = _express.Router();

// router.use('/', (req, res, next) => {
//   res.send('main route');
// }); // rota principal

// router.use((req, res, next) => {
//   res.send('404 error route');
// }); // tratamento para erro 404

router.use((err, req, res, next) => {
  res.send(err);
}); // tratamento para demais erros

module.exports = router;

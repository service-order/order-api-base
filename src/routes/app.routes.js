const _express = require('express');
const appRouter = _express.Router();

appRouter.use('/', (req, res, next) => {
  res.send('main route');
}); // rota principal

appRouter.use((req, res, next) => {
  res.send('404 error route');
}); // tratamento para erro 404

appRouter.use((err, req, res, next) => {
  res.send(err);
}); // tratamento para demais erros

module.exports = appRouter;

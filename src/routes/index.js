const _express = require('express');
const routes = _express.Router();

const userRoutes = require('./user.routes');

routes.use('/user', userRoutes);

module.exports = routes;

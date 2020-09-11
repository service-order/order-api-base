const express = require('express');
const bodyp = require('body-parser');

const defaultRoutes = require('../routes/app.routes');
const routes = require('../routes/');

const application = express();

application.use(bodyp.json({ limit: '15mb' }));
application.use(bodyp.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));

application.use(routes);
application.use(defaultRoutes);

module.exports = application;

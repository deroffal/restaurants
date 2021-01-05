const express = require('express');
const config = require('../config');
const error_handlers = require('./middlewares/error-handlers');

const restaurantRoutes = require('./routes/restaurant');

const app = express();

const port = process.env.PORT || config.server.port;
app.set('port', port);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/restaurant', restaurantRoutes);

Object.values(error_handlers).map(fn => app.use(fn));

module.exports = app;

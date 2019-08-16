const express = require('express');
const morgan = require('morgan');
const app = express();

// Logging
app.use(morgan('dev'));

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
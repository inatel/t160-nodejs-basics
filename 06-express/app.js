const express = require('express');
const morgan = require('morgan');
const notFound = require('./api/utils/notfound');

const app = express();

// Logging
app.use(morgan('dev'));

// Mapped routes
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Error Handling
app.use(notFound);

module.exports = app;
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Handling GET requests to /products'
  });
});

router.post('/', (request, response) => {
  response.status(200).json({
    message: 'Handling POST requests to /products'
  });
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  response.status(200).json({
    message: 'Handling POST requests to /products'
  });
});

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Handling GET requests to /products'
  });
});

router.get('/:productId', (request, response) => {
  const id = request.params.productId;
  response.status(200).json({
    message: 'You passed an ID',
    id
  });
});

module.exports = router;
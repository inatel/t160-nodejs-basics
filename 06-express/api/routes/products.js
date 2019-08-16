const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  const product = {
    name: request.body.name,
    price: request.body.price
  }

  response.status(201).json({
    message: 'Product was created',
    product
  });
});

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Products were fetched'
  });
});

router.get('/:productId', (request, response) => {
  const id = request.params.productId;
  response.status(200).json({
    message: `Product with ID = ${id} was fetched`,
    id
  });
});

router.patch('/:productId', (request, response) => {
  const id = request.params.productId;
  response.status(200).json({
    message: 'Update product ID = ' + id,
    id
  });
});

router.delete('/:productId', (request, response) => {
  const id = request.params.productId;
  response.status(200).json({
    message: 'Delete product ID = ' + id,
    id
  });
});

module.exports = router;
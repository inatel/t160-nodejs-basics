const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  response.status(201).json({
    message: 'Order was created'
  });
});

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Orders were fetched'
  });
});

router.get('/:orderId', (request, response) => {
  const id = request.params.orderId;
  response.status(200).json({
    message: `Order with ID = ${id} was fetched`,
    id
  });
});

router.patch('/:orderId', (request, response) => {
  const id = request.params.orderId;
  response.status(200).json({
    message: 'Update order ID = ' + id,
    id
  });
});

router.delete('/:orderId', (request, response) => {
  const id = request.params.orderId;
  response.status(200).json({
    message: 'Delete order ID = ' + id,
    id
  });
});

module.exports = router;
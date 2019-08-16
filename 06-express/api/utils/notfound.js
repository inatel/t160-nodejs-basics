const notFound = (request, response, next) => {
  response.status(400);
  response.json({
    error: {
      message: 'Not found'
    }
  });
}

module.exports = notFound;
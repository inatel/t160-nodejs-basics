const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

function requestHandler(request, response) {
  console.log(request.method, request.url);
  if (request.url === '/') {
    readFile('./index.html')
      .then(data => response.end(data));
  } else if (request.url === '/api/anyservice') {
    response.setHeader('Content-Type', 'application/json');
    response.end(`{ "message": "Hi there!" }`);
  } else {
    response.statusCode = 404;
    response.end();
  }
}

http.createServer(requestHandler)
  .listen(port, () => {
    console.log(`Server up on http://${host}:${port}`);
  })
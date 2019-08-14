const http = require('http');

const host = 'localhost';
const port = 3000;

function requestHandler(request, response) {
  const { method, url } = request;
  console.log(`${method}: ${url}`);
  response.end('Hi there again!');
}

http.createServer(requestHandler)
  .listen(port, () => {
    console.log(`Server up on http://${host}:${port}`);
  });
const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, fileContent) => {
      if(error) reject(error);
      resolve({ fileName, fileContent });
    });
  });
}

function writeData(data) {
  console.log(data.fileContent);
}

const anyError = error => console.log(error);

readFile('my-file.txt')
  .then(writeData)
   .catch(anyError);

console.log('Coffee is ready!!! Came!');
const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, fileContent) => {
      if(error) reject(error);
      resolve(fileContent);
    });
  });
}

const showFileContent = fileContent => console.log(fileContent);
const anyError = error => console.log(error);

readFile('my-file.txt')
  .then(showFileContent)
  .catch(anyError);

console.log('Coffee is ready!!! Came!');
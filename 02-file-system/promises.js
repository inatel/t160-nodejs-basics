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
  return new Promise((resolve, reject) => {
    const newContent = data.fileContent + "\nDM124 - Node.js";
    fs.writeFile(data.fileName, newContent, (error) => {
      if(error) reject(error);
      resolve('The file has been saved!');
    })
  });
}

const anyError = error => console.log(error);

readFile('my-file.txt')
  .then(writeData)
  .catch(anyError);

console.log('Coffee is ready!!! Came!');
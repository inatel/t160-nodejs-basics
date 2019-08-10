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
  const { fileName, fileContent } = data;
  return new Promise((resolve, reject) => {
    const newContent = fileContent + "\nDM124 - Node.js";
    fs.writeFile(fileName, newContent, (error) => {
      if(error) reject(error);
      resolve({ fileName, fileContent: newContent });
    })
  });
}

function addToLog(data) {
  return new Promise((resolve, reject) => {
    const logFileName = 'my-log.txt';

    function writeLog(logs) {
      const newEntry = `${new Date().toISOString()} - ${data.fileName}`;
      const logContent = `${logs}\n${newEntry}`;
      fs.writeFile(logFileName, logContent, (error) => {
        if(error) reject(error);
        resolve('Log added!');
      });
    }

    readFile(logFileName)
      .then(logData => writeLog(logData.fileContent));
  });
}

const notifyOnSuccess = () => console.log('Process has been finished!');
const notifyOnError = (error) => console.log(error);

readFile('my-file.txt')
  .then(writeData)
  .then(addToLog)
  .then(notifyOnSuccess)
  .catch(notifyOnError);

console.log('---> Coffee is ready!!! Came!');
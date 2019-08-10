const fs = require('fs');

const fileName = 'my-file.txt';

fs.readFile(fileName, 'utf-8', (error, data) => {
  if (error) throw error;
  fs.writeFile(fileName, data + '\nCallback Hell', (error) => {
    if(error) throw error;
    fs.writeFile('my-logfile.txt', new Date().toLocaleString(), (error) => {
      if(error) throw error;
      console.log('Process has been finished!');
    })
  })
});
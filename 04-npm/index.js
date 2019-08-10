const chalk = require('chalk');
const string = require('useful-string');
const times = require('lodash/times');

console.log(chalk.blue.underline('Hi NPM modules!!'));
times(4, () => console.log(string.guid()));
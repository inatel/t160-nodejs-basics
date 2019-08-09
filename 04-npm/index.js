const chalk = require('chalk');
const string = require('useful-string');

const names = [
  "Felipe Godinho de Almeida",
  "Francine de Fátima Braga Amorim",
  "Gerson Lourenço de Carvalho",
  "Pereira da Conceição"
];

const print = name => console.log(chalk.blue(name));
names.map(string.hyphenate).forEach(print);
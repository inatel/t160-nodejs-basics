const values = process.argv.slice(2);

function regularPrint(value) {
    console.log('The value is: ' + value);
}

function fancyPrint(value) {
    console.log(`---> ${ value } <---`);
}

const print = eval(process.env.PRINTER) || regularPrint;
values.forEach(print);

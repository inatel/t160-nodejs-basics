const values = process.argv.splice(2);
const convertToNumber = value => Number(value);
const sum = (total, current) => total + current;

const total = values
    .map(convertToNumber)
    .reduce(sum);

console.log('The sum is ' + total);
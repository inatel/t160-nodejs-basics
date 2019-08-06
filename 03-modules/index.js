const BMIService = require('./BMIService');

const weight = 75;
const height = 1.71;
const bmi = BMIService.getIndex(weight, height);

console.log('BMI is: ' + bmi.toFixed(2));
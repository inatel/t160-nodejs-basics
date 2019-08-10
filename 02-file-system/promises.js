
function getWeatherForecast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sunshine'), 1000);
  });
}

getWeatherForecast()
  .then(weatherForecast => console.log(weatherForecast));

console.log('Coffee is ready!!! Came!');
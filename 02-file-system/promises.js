
function getWeatherForecast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Sorry dad, I could not get it.'), 1000);
  });
}

getWeatherForecast()
  .then(weatherForecast => console.log(weatherForecast))
  .catch(error => console.log(error))

console.log('Coffee is ready!!! Came!');
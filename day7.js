const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => { 
  const tempCelsius = Math.round((temperature - 32) * 5/9);
  const windSpeedMeterPerSecond = Math.round(windSpeed / 2.237)
  const obj = {temperature: tempCelsius, windSpeed: windSpeedMeterPerSecond,  windDirection, condition}
  return obj;
}
const temperature = 32
const condition = "Sunny with small clouds"
const windSpeed = 20
const windDirection = "NNE"

console.log(storeWeatherConditions(temperature, condition, windSpeed, windDirection))
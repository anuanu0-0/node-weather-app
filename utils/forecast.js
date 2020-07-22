const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9431f7f828b921327ebdbb126217e5e3&query=" +
    longitude +
    "," +
    latitude +
    "&units=f";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        weather_desc: response.body.current.weather_descriptions[0],
        temperature: response.body.current.temperature,
        feels_like_temperature: response.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;

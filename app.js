const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=ACCESS_KEY&query=20.593683,78.962883&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". The temperature is " +
        response.body.current.temperature +
        " and it feels like " +
        response.body.current.feelslike
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=ACCESS_TOKEN&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect location service");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try again!!");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});

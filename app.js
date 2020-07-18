const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=ACCESS_KEY&query=20.593683,78.962883&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". The temperature is " +
//         response.body.current.temperature +
//         " and it feels like " +
//         response.body.current.feelslike
//     );
//   }
// });

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=ACCESS_TOKEN&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect location service");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try again!!");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=YOUR_ACCESS_TOKEN&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.featurs.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    }
  });
};

geocode("Singrauli", (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});

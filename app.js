const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

forecast(24.11, 82.39, (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});

geocode("Singrauli", (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});

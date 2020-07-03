const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=9431f7f828b921327ebdbb126217e5e3&query=20.593683,78.962883";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current);
});

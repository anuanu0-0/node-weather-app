const request = require("request");

const URL =
  "http://api.weatherstack.com/current?access_key=9431f7f828b921327ebdbb126217e5e3&query=20.593683,78.962883";

request({ url: URL }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});

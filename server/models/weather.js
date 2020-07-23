const request = require("request-promise");

const API_KEY = "3c81d06e8e870d807e26501d1cfbfeed";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true,
    })
      .then(function (res) {
        callback(res);
      })
      .catch(function (err) {
        console.log(err);
        callback({ error: "Could not reach OpenWeather API" });
      });
  }
}

module.exports = Weather;

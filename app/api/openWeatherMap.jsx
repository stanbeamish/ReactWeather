var axios = require('axios');

const OWM_API_KEY = process.env.OWM_API_KEY;
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${OWM_API_KEY}&units=metric`;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var countryCode = 'de';
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation},${countryCode}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}

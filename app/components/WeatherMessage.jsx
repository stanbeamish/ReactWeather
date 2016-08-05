var React = require('react');

var WeatherMessage = ({ temp, location }) => {
  return (
    <h3 className="text-center">In {location} sind es {temp}°C</h3>
  );
}

module.exports = WeatherMessage;

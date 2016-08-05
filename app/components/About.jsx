var React = require('react');
// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
// -> the same:

// stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Über</h1>
      <p>Mit dieser Seite kannst du dir Wetterdaten für einen Orte suchen und anzeigen lassen.</p>
      <p>Diese Seite wurde mit React erstellt.</p>
      <p>
        Um die Seite zu erstellen, wurden folgende Werkzeuge verwendet:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Das JavaScript Framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> -
          Mit Hilfe der entsprechenden API werden die Wetterdaten abgerufen.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> -
          Mit Hilfe der entsprechenden API werden die Wetterdaten abgerufen.
        </li>
        <li>
          <a href="http://foundation.zurb.com/sites/docs/">Foundation</a> -
          Foundation ist das verwendete Responsive Front-End Framework
        </li>
      </ul>
    </div>
  );
};

module.exports = About;

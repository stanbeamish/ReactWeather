var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">Beispiele</h1>
      <p>Sie können durch Klicken auf einen Link direkt die Wetterdaten folgender Orte abrufen:</p>
        <ol>
            <li>
              <Link to='/?location=Westergellersen'>Westergellersen, Niedersachsen</Link>
            </li>
            <li>
              <Link to='/?location=Randegg'>Randegg, Baden-Württemberg</Link>
            </li>
            <li>
              <Link to='/?location=Honolulu'>Honolulu, Hawaii</Link>
            </li>
        </ol>
      </div>
    );
};

module.exports = Examples;

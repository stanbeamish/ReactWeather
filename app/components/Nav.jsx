var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function(event) {
    event.preventDefault();
    
    var location = this.refs.search.value;
    // encode for use in url to route to search result component
    var encodedLocation = encodeURIComponent(location);
    //switch page
    if(location.length > 0) {
      this.refs.search.value = '';
      //window.location.hash = "#/?location=" + encodedLocation;
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render: function() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Mein Wetter</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Wetterdaten</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Über</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Beispiele</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Wetterdaten abrufen" ref="search" />
              </li>
              <li>
                <input type="submit" className="button" value="Abrufen" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

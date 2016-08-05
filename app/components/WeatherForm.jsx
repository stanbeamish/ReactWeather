var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();

    var location = this.refs.location.value;

    if(location.length >0 ) {
      this.refs.location.value = '';
      // call parent function ... of Weather component
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Ort eingeben" />
          <button className="hollow button expanded">Wetterdaten abrufen</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;

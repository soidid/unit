/** @jsx React.DOM */

var React = require('react/addons');

require('./AppBar.css');


var AppBar = React.createClass({
  
  render () {
  	
    return (
      <div className="AppBar">
         DE.NEWS
      </div>
    );
  }
});

module.exports = AppBar;



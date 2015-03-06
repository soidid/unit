/** @jsx React.DOM */

var React = require('react/addons');
require('./Icon.css');

var Icon = React.createClass({
  
  render () {
    var {
      icon } = this.props;

    return (
      <div >
        <span className={ "fa " + icon}></span>
      </div>
    );
  }
});

module.exports = Icon;
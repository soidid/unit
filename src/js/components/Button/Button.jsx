/** @jsx React.DOM */

var React = require('react/addons');
var Icon = require('../../components/Icon/Icon.jsx');

require('./Button.css');

var Button = React.createClass({
  
  render () {
  	var classes = this.props.expand ? "fa-chevron-circle-up" : "fa-chevron-circle-down";
    return (
      <div className="Button"
           onClick={this.props.clickHandler}>
           <Icon icon={classes} />
      </div>
    );
  }
});

module.exports = Button;



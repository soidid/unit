/** @jsx React.DOM */

var React = require('react/addons');
var Button = require('../../components/Button/Button.jsx');


require('./InfoCard.css');

var InfoCard = React.createClass({
  
  getInitialState () {
    return {
      expand: false
    }
  },

  
  _onClick () {
    this.setState({
      expand: !this.state.expand
    });
    
  },

  render () {

    var infoCardClasses = this.state.expand ? "InfoCard-card is-expand" : "InfoCard-card";

    return (
        <span>
            <span className="InfoCard-name">{this.props.name}</span>
      		<Button clickHandler={this._onClick}
                    expand={this.state.expand}/>
      		<div className={infoCardClasses}>
                {this.props.data}
            </div>
        </span>
     
    );
  }
});

module.exports = InfoCard;



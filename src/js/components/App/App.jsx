/** @jsx React.DOM */

var React = require('react/addons');

var AppBar = require('../../components/AppBar/AppBar.jsx');
var Article = require('../../components/Article/Article.jsx');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions');

require('./App.css');

function getBooks(){
  return AppStore.getBooks();
}

var App = React.createClass({
  
  mixins: [React.addons.LinkedStateMixin],
  
  getInitialState(){
    return {
      books: getBooks()
    }
  },
  
  //把 view 註冊到 stores，當 store 有改變/emit change 的時候，用 _onChange 這個 callback 處理
  componentDidMount () {
    AppStore.addChangeListener(this._onChange);
    
  },
  
  componentWillUnmount () {
    AppStore.removeChangeListener(this._onChange);
  },

  _onClick (i, event) {
  	
  },

  _onChange (){
      this.setState({
        books: getBooks()
      });
  },


  render () {
  	
    return (
      <div className="App">
          <AppBar />

          <div className="App-main">
              <div className="App-content">
                <Article />
              </div>
          </div>
      </div>
    );
  }
});

module.exports = App;



var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Todo = React.createClass({
	getInitialState: function() {
	   return {
	   	value: 'Hello!'
	   };
	 },
	 componentDidMount: function() {
	  
	 },
  render: function() {
    return (
    	<input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  },
  handleChange: function(event) {
		this.setState({value: event.target.value});
	}
});

ReactDOM.render(<Todo/>, document.getElementById('todo'));



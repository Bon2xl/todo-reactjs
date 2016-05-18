var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Todo = React.createClass({
	getInitialState: function() {
	   return {
	   	valueInput: ''
	   };
	 },
	 componentDidMount: function() {
	  
	 },
  render: function() {
    return (
    	<form className="commentForm">
	    	<input type="text" name="addTodo" placeholder="Add todo" type="text" value={this.state.valueInput} onChange={this.handleChange} />
	    	<input type="submit" value="Post" />
	    </form>
    );
  },
  handleChange: function(e) {
  	e.preventDefault();
		this.setState({valueInput: event.target.value});
	}
});

ReactDOM.render(<Todo/>, document.getElementById('todo'));



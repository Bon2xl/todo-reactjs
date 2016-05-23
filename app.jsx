
var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require('firebase/app');
var Config = require('./config.jsx');
var authCustom = require('./authentication.jsx');

// Firebase
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

var Todo = React.createClass({
	getInitialState: function() {
		return {
			todoTxt: '',
			items: []
		};
	},
	componentDidMount: function() {
		this.FBURL = Firebase.initializeApp(Config);
		authCustom(); // Authentication

		// Firebase query
		var itemsTodo = [];
		this.DBTodos = firebase.database().ref('todos');
		// this.DBTodos.on("child_added", function(data) {
		// 	itemsTodo.push({key:data.key , todo:data.val().todo});
		// 	this.setState({
		// 		items:itemsTodo
		// 	});
	  // }.bind(this));
		this.DBTodos.on("child_added", (data) => {
			itemsTodo.push({key:data.key , todo:data.val().todo});
			this.setState({
				items:itemsTodo
			});
	  });
	},
  render: function() {
    return (
			<div>
	    	<form className="commentForm" onSubmit={this.submitForm}>
		    	<input type="text" name="addTodo" placeholder="Add todo" value={this.state.todoTxt} onChange={this.handleChange} />
		    	<input type="submit" name="submit"  value="Add" />
		    </form>

				<h3>List Data</h3>
				{this.listItems()}
			</div>
    );
  },
	listItems: function() {
		return this.state.items.map(function(result) {
	  	return (
				<div onClick={() => this.handleClick(result.key)} key={result.key}>{result.todo}<br /></div>
			);
		}.bind(this));
	},
	handleClick: function(keys){
		console.log(keys);
	},
  handleChange: function(e) {
		this.setState({todoTxt: e.target.value});
	},
	submitForm: function(e) {
		e.preventDefault();
		this.DBTodos.push({
  		todo: this.state.todoTxt
		});
		this.setState({todoTxt: ""});
	},
});

ReactDOM.render(<Todo/>, document.getElementById('todo'));

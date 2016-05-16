'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  displayName: 'Hello',

  render: function render() {
    return React.createElement(
      'h1',
      { className: 'red' },
      'Hello!'
    );
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('body'));
//# sourceMappingURL=app.js.map

// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
// var ReactDOM = require('react-dom');

var dummyData = ['Learn Quantopian', 'Review React', 'Read \'The Crowd\'', 'Buy Plane Ticket', 'Send Dad My Emergency Contact']


class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map(todo => <Todo task={todo}/>)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  render() {
    return (
      <li>
        <button>
          X
        </button>
        {this.props.task}
      </li>
    )
  }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));

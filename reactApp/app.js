// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
// var ReactDOM = require('react-dom');

var dummyData = ['Learn Quantopian', 'Review React', 'Read \'The Crowd\'', 'Buy Plane Ticket', 'Send Dad My Emergency Contact'];

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

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map(todo => <Todo task={todo}/>)}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="task" value="" />
        <button>
          Add todo
        </button>
      </div>
    )
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
// var ReactDOM = require('react-dom');

var dummyData = [
  { taskText: "Learn Quantopian", completed: false },
  { taskText: "Review React", completed: false },
  { taskText: "Read \'The Crowd\'", completed: false },
  { taskText: "Buy Plane Ticket", completed: false },
  { taskText: "Deploy Fridg!t to Heroku", completed: true },
  { taskText: "Send Dad My Emergency Contact", completed: false }
];

class Todo extends React.Component {
  render() {
    let styledText = (this.props.task.completed) ? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText;
    return (
      <li>
        <button>
          X
        </button>
        {styledText}
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

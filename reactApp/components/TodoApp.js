import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';

var dummyData = [
  { taskText: "Learn Quantopian", completed: false },
  { taskText: "Review React", completed: false },
  { taskText: "Read \'The Crowd\'", completed: false },
  { taskText: "Buy Plane Ticket", completed: false },
  { taskText: "Deploy Fridg!t to Heroku", completed: true },
  { taskText: "Send Dad My Emergency Contact", completed: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  };

  componentDidMount() {
    this.setState({ todos: dummyData });
  };

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  };
};

export default TodoApp;

import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <Todo key={todo._id} toggleClick={() => {this.props.todoToggleClick(todo._id)}} xClick={() => {this.props.todoXClick(todo._id)}} task={todo}/>)}
      </ul>
    )
  }
}

export default TodoList;

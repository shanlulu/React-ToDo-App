import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => <Todo toggleClick={() => {this.props.todoToggleClick(i)}} xClick={() => {this.props.todoXClick(i)}} task={todo}/>)}
      </ul>
    )
  }
}

export default TodoList;

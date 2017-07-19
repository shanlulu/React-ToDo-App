import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <Todo task={todo}/>)}
      </ul>
    )
  }
}

export default TodoList;

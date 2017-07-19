import React from 'react';

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

export default Todo;

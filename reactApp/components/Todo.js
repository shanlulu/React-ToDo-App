import React from 'react';

class Todo extends React.Component {
  render() {
    let styledText = (this.props.task.completed) ? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText;
    return (
      <li>
        <button onClick={() => this.props.xClick()}>
          X
        </button>
        <span onClick={() => this.props.toggleClick()}>{styledText}</span>
      </li>
    )
  }
}

export default Todo;

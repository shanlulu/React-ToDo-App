import React from 'react';

class Todo extends React.Component {
  render() {
    let styledText = (this.props.task.completed) ? <strike>{this.props.task.task}</strike>: this.props.task.task;
    return (
      <li className="ui-state-default">
          <button onClick={() => this.props.xClick()} className="btn btn-primary">X</button>
          <label onClick={() => this.props.toggleClick()}>{styledText}</label>
      </li>
    )
  }
}

export default Todo;

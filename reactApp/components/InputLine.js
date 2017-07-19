import React from 'react';

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="task" value="" />
        <button onClick={() => {this.props.submit('Test Task')}}>
          Add todo
        </button>
      </div>
    )
  }
}

export default InputLine;

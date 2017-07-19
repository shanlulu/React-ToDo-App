import React from 'react';

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

export default InputLine;

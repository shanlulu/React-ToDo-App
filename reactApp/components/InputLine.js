import React from 'react';

class InputLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  };

  handleTyping(event) {
    event.preventDefault();
    this.setState({ typedText: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({ typedText: '' });
  }

  render() {
    return (
      <div className="form-group">
         <input type="text" className="form-control add-todo" placeholder="task" value={this.state.typedText} onChange={(e) => this.handleTyping(e)}/>
         <button id="addTodo" className="btn btn-success" onClick={(e) => {this.handleSubmit(e)}}>Add Todo</button>
       </div>
    )
  }
}

export default InputLine;

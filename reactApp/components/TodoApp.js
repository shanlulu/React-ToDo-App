import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';
import axios from 'axios';

// var dummyData = [
//   { task: "Learn Quantopian", completed: false },
//   { task: "Review React", completed: false },
//   { task: "Read \'The Crowd\'", completed: false },
//   { task: "Buy Plane Ticket", completed: false },
//   { task: "Deploy Fridg!t to Heroku", completed: true },
//   { task: "Send Dad My Emergency Contact", completed: false }
// ];

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  };

  componentDidMount() {
    axios.get(dbUrl + '/all')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    // this.setState({ todos: dummyData });
  };

  addTodo(task) {
    axios.post(dbUrl + '/add', {task: task})
      .then(response => {
        this.setState({ todos: this.state.todos.concat(response.data)});
      })
      .catch(function(error) {
        console.log(error);
      });
    //dummyData.push({taskText: task, completed: false});
    //this.setState({ todos: dummyData});
  };

  removeTodo(id) {
    axios.post(dbUrl + '/remove', {id: id})
      .then(response => {
        let list = this.state.todos;
        list.forEach((todo, index) => {
          if (todo._id === id) {
            list.splice(index, 1);
          }
        })
        this.setState({ todos: list });
      })
      .catch(function(err) {
        console.log(err);
      })
    // dummyData.splice(index, 1);
    // this.setState({ todos: dummyData});
  }

  toggleTodo(id) {
    // dummyData[index].completed = !dummyData[index].completed;
    // this.setState({ todos: dummyData});
    axios.post(dbUrl + '/toggle', {id: id})
      .then(response => {
        let list = this.state.todos;
        list.forEach((todo, index) => {
          if (todo._id === id) {
            list.splice(index, 1, response.data);
          }
        })
        this.setState({ todos: list });
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="todolist">
              <h1>Todos</h1>
              <InputLine submit={(task) => this.addTodo(task)} />
              <hr />
              <TodoList todos={this.state.todos} todoToggleClick={(i) => this.toggleTodo(i)} todoXClick={(index) => this.removeTodo(index)} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default TodoApp;

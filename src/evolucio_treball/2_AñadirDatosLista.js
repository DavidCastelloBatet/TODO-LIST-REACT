import React, { Component } from "react";

//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "David",
      todoItems: [
        { action: "Compres", done: false },
        { action: "Netejar plats", done: false },
        { action: "Treure al nen", done: true }
      ],
      newItemText: ""
    };
  }

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItem)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  render = () => (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}' s To Do List (
        {this.state.todoItems.filter(t => !t.done).length} items to do)
      </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input
            className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue}
          />
          <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

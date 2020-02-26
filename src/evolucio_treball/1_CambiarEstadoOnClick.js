import React, { Component } from "react";

//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "David"
    };
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "David" ? "Pepe" : "David"
    });
  };

  render() {
    return (
      <div>
        <div className="bg-primary text-white text-center p-2">
          <h4>{this.state.userName}'s To Do List</h4>
        </div>
        <button className="btn btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button>
        <div></div>
      </div>
    );
  }
}

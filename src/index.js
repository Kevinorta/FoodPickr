import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }
  addFood(input) {
    let foodArray = this.state.list;

    foodArray.push(input);
    this.setState({
      list: foodArray,
      userInput: ""
    });
  }
  remove(val) {
    let foodArray = this.state.list;
    foodArray = foodArray.filter(e => e !== val);
    this.setState({
      list: foodArray,
      userInput: ""
    });
  }
  pickFood(list) {
    let pickedFood = list[Math.floor(Math.random() * list.length)];
    alert(pickedFood);
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Type Food Here"
          value={this.state.userInput}
          onChange={e => {
            this.changeUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            this.addFood(this.state.userInput);
          }}
        >
          Add Food
        </button>
        <button
          onClick={() => {
            this.pickFood(this.state.list);
          }}
        >
          Pick Food
        </button>
        <ul>
          {this.state.list.map(val => (
            <ul>
              <li>{val}</li>
              <button
                onClick={() => {
                  this.remove(val);
                }}
              >
                X
              </button>
            </ul>
          ))}
        </ul>
      </div>
    );
  }
}
//hey
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

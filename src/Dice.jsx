import React, { Component } from "react";
import "./styles.css";
const numbers = ["1", "2", "3", "4", "5", "6"];
export default class Dice extends Component {
  state = {
    diceOne: null,
    diceTwo: null,
    diceThree: null,
  };

  randNum = (e) => {
    if (e.key === "32") {
      const rand = numbers[Math.floor(Math.random() * numbers.length)];
    }
  };

  clickDiceOne = (e) => {
    const rand = numbers[Math.floor(Math.random() * numbers.length)];
    this.setState({ diceOne: rand });
  };

  clickDiceTwo = (e) => {
    const rand = numbers[Math.floor(Math.random() * numbers.length)];
    this.setState({ diceTwo: rand });
  };

  clickDiceThree = (e) => {
    const rand = numbers[Math.floor(Math.random() * numbers.length)];
    this.setState({ diceThree: rand });
  };

  componentDidMount() {
    window.addEventListener("keyup", this.randNum);
  }

  render() {
    let { diceOne, diceTwo, diceThree } = this.state;
    return (
      <div className="diceDiv">
        <div className="dice diceOne" onClick={this.clickDiceOne}>
          {diceOne}
        </div>
        <div className="dice diceTwo" onClick={this.clickDiceTwo}>
          {diceTwo}
        </div>
        <div className="dice diceThree" onClick={this.clickDiceThree}>
          {diceThree}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

class GameUI extends Component {
  constructor() {
    super();
    this.state = {
      playerTurn: 1,
      p1Stats: {
        health: 100,
        attack: 20,
        defence: 10,
        money: 500,
        walls: 0,
        soldiers: 0,
        industries: 0,
        farms: 0
      },
      p2Stats: {
        health: 100,
        attack: 20,
        defence: 10,
        money: 500,
        walls: 0,
        soldiers: 0,
        industries: 0,
        farms: 0
      },
      enterChoice: 1
    };
    this.changeTurn = this.changeTurn.bind(this);
    this.renderTurn = this.renderTurn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeTurn(gameTurn) {
    this.setState({
      playerTurn: gameTurn
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  renderTurn() {
    let tempPlayerTurn = this.state.playerTurn;
    if (tempPlayerTurn === 1) {
      return (
        <div>
          <p>Player {tempPlayerTurn}'s Turn:</p>
          <ul>
            <li>The number of walls you have: {this.state.p1Stats.walls}</li>
            <li>
              The number of soldiers you have: {this.state.p1Stats.soldiers}
            </li>
            <li>
              The number of industries you have: {this.state.p1Stats.industries}
            </li>
            <li>The number of farms you have: {this.state.p1Stats.farms}</li>
          </ul>
          <br />
          <ol>
            <li>Build a wall</li>
            <li>Create a soldier</li>
            <li>Start an industry</li>
            <li>Start a farm</li>
            <li>Attack opponent</li>
          </ol>
          <input
            type="number"
            name="playerChoice"
            placeholder="Enter your choice: "
            value={this.state.enterChoice}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button onClick={e => this.changeTurn(2)} href="#">
            Enter
          </button>
        </div>
      );
    } else if (tempPlayerTurn === 2) {
      return (
        <div>
          <p>Player {tempPlayerTurn}'s Turn:</p>
          <ul>
            <li>The number of walls you have: {this.state.p2Stats.walls}</li>
            <li>
              The number of soldiers you have: {this.state.p2Stats.soldiers}
            </li>
            <li>
              The number of industries you have: {this.state.p2Stats.industries}
            </li>
            <li>The number of farms you have: {this.state.p2Stats.farms}</li>
          </ul>
          <br />
          <ol>
            <li>Build a wall</li>
            <li>Create a soldier</li>
            <li>Start an industry</li>
            <li>Start a farm</li>
            <li>Attack opponent</li>
          </ol>
          <input />
          <br />
          <br />
          <button onClick={e => this.changeTurn(0)} href="#">
            Enter
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Player Values</p>
          <button onClick={e => this.changeTurn(1)} href="#">
            Enter
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderTurn()}</div>;
  }
}

export default GameUI;

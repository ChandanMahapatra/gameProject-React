import React, { Component } from "react";
import GameUI from "./GameUI";

//change "Quit Game" to "Go Home" and after that add alert to inform players that on clicking the "Go Home" button they will be quiting the game
class Game extends Component {
  render() {
    return (
      <div>
        <h2>Game</h2>
        <GameUI />
        <br />
        <button onClick={e => this.props.changeMenu(0)} href="#">
          Quit Game
        </button>
      </div>
    );
  }
}

export default Game;

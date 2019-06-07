import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div>
        <div>Game</div>
        <button onClick={e => this.props.changeMenu(0)} href="#">
          Go Home
        </button>
      </div>
    );
  }
}

export default Game;

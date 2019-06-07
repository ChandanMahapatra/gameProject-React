import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={e => this.props.changeMenu(1)} href="#">
          Start Game
        </button>
        <button onClick={e => this.props.changeMenu(2)} href="#">
          Instructions
        </button>
      </div>
    );
  }
}

export default Home;

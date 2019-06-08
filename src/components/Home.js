import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={e => this.props.changeMenu(1)} href="#">
          Start Game
        </button>
        <br />
        <br />
        <button onClick={e => this.props.changeMenu(2)} href="#">
          Instructions
        </button>
      </div>
    );
  }
}

export default Home;

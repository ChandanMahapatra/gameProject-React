import React, { Component } from "react";
import GameContent from "./GameContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>Made by ....</h2>
        <GameContent />
      </div>
    );
  }
}

export default App;

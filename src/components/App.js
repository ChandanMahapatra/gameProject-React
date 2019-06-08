import React, { Component } from "react";
import GameContent from "./GameContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>Made by ....</p>
        <GameContent />
      </div>
    );
  }
}

export default App;

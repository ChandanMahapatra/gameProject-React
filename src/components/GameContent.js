import React, { Component } from "react";
import Game from "./Game";
import Home from "./Home";
import Instructions from "./Instructions";

class GameContent extends Component {
  constructor() {
    super();
    this.state = {
      menuState: 0
    };
    this.changeMenu = this.changeMenu.bind(this);
  }

  changeMenu(menuOpt) {
    this.setState({
      menuState: menuOpt
    });
  }

  render() {
    //How can I put all of this in function?
    const currentMenu = this.state.menuState;
    console.log(currentMenu);
    if (currentMenu === 1) {
      return <Game changeMenu={this.changeMenu} />;
    } else if (currentMenu === 2) {
      return <Instructions changeMenu={this.changeMenu} />;
    } else {
      return <Home changeMenu={this.changeMenu} />;
    }
  }
}

export default GameContent;

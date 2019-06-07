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

  //Do I need to unmount the components if they are getting switched?
  renderMenu() {
    console.log(this.state.menuState);
    if (this.state.menuState === 1) {
      return <Game changeMenu={this.changeMenu} />;
    } else if (this.state.menuState === 2) {
      return <Instructions changeMenu={this.changeMenu} />;
    } else {
      return <Home changeMenu={this.changeMenu} />;
    }
  }

  render() {
    return <div>{this.renderMenu()}</div>;
  }

  /*
  render() {
    //Inside Render
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
*/
}

export default GameContent;

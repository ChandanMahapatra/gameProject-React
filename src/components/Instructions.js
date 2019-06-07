import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <div>
        <div>Instructions</div>
        <button onClick={e => this.props.changeMenu(0)} href="#">
          Go Home
        </button>
      </div>
    );
  }
}

export default Instructions;

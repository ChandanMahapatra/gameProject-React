import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <div>
        <h2>Instructions</h2>
        <div style={{ textAlign: "Left" }}>
          <h3>WARS is a 2 player Turn Based Strategy Game</h3>
          <p>
            The aim is to eliminate the opponent (for that you need to reduce
            your opponent's health to Zero)
          </p>
          <h4>You start off with some basic stats : </h4>
          <ul>
            <li>Health = 100 HP (MAX)</li>
            <li>Attack = 20</li>
            <li>Defence = 10</li>
            <li>Money = 500 Coins</li>
          </ul>
          <h4>During your turn you can : </h4>
          <ul>
            <li>
              a) Build a :
              <ul>
                <li>1)Wall : It gives defence(+5) - Costs 60 Coins </li>
                <li>2)Soldier : It gives attack(+7) - Costs 75 Coins </li>
                <li>
                  3)Indusry : Its generates money (by 20 Coins after each turn,
                  more industries you have more money you generate ) - Costs 75
                  Coins{" "}
                </li>
                <li>
                  4)Farm : It regenerates Health(by 5HP after each turn,more
                  farms you have more HP you regenerate) - Costs 80 Coins
                </li>
              </ul>
            </li>
            <br />
            <li>b) Attack the opponent</li>
          </ul>
        </div>
        <br />
        <button onClick={e => this.props.changeMenu(0)} href="#">
          Go Home
        </button>
      </div>
    );
  }
}

export default Instructions;

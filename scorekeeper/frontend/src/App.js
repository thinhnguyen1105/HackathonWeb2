import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "lodash";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateNewGame from "./components/CreateNewGame";
import ScoreTable from "./components/ScoreTable";


class App extends Component {
  state = {
    initializing: true
  };
  playerNames = [];

  _startGame = players => {
    this.playerNames = players;
    this.setState({ initializing: false });
  }

 

  render() {
    const renderedComponent = this.state.initializing ? <CreateNewGame startGame={this._startGame} /> : <ScoreTable playerNames={this.playerNames} />;
    return (
      <div className="App container">
        <NavBar />
        {renderedComponent}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/home/Home';
import Games from './components/games/Games';




class App extends Component {
  state = {
    initializing : true
  }
 
  render() {
   return(
    <div className="App container">
    <h1 className="header">Score Keeper</h1>
    <hr/>
     {this.state.initializing ? <Home onclick = {this.onclickButton}/> : <Games/>}
     </div>
   )
   
    
  }  
  onclickButton = e => this.setState({initializing: false}) 
}



export default App;

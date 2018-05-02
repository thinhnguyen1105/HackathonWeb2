import React, { Component } from 'react';
import InputBox from "./inputBox";
import ButtonCenter from "./ButtonCenter";


class Home extends Component {
  render() {
    return (
        
          <form className="navbar-form navbar-left" method="POST" action="/">
            <InputBox id={"over"} name={"namePlayer1"} placeholder={"Player1..."}/>
            <InputBox id={"over1"} name={"namePlayer2"} placeholder={"Player2..."}/>
            <InputBox id={"over1"} name={"namePlayer3"} placeholder={"Player3..."}/>
            <InputBox id={"over1"} name={"namePlayer4"} placeholder={"Player4..."}/>
            <ButtonCenter onclickbutton = {this.props.onclick}/>
           </form>
     
    );
  }
}

export default Home;
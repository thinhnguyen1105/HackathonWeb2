import React, { Component } from 'react';

class ButtonCenter extends Component {
  render() {
    return (
      <div id="btncenter">
        <button type="submit" className="btn btn-default" id="button" onClick={this.props.onclickbutton}>CREATE NEW GAME</button>
      </div>
    );
  }
}

export default ButtonCenter;
import React, { Component } from 'react';

class NameRow extends Component {
  render() {
    return (
        <div>
        <div className="namerow" id="nameRow">
            <div className="name">Shounen A</div>
            <div className="name">Shounen B</div>
            <div className="name">Shounen C</div>
            <div className="name">Shounen D</div>
        </div>
    
        <div className="namerow">
            <div className="sum">Sum of Score(0)</div>
            <div className="sum">-5</div>
            <div className="sum">14</div>
            <div className="sum">-1</div>
            <div className="sum">-8</div>
        </div>
        </div>
    );
  }
}

export default NameRow;
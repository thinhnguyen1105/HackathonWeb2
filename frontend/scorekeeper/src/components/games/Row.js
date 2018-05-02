import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
        <div className="namerow">
        <div className="r1"><div>Round 1</div></div>
        <div className="r1"><div className="form-control">-5</div></div>
        <div className="r1"><div className="form-control">-6</div></div>
        <div className="r1"><div className="form-control">-7</div></div>
        <div className="r1"><div className="form-control">-9</div></div>
    </div>
    );
  }
}

export default Row;
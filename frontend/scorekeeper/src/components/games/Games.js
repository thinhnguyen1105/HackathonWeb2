import React, { Component } from 'react';
import NameRow from './NameRow';
import Row from './Row';
import ButtonAddRow from './ButtonAddRow';


class Games extends Component {
  render() {
    return (
      <div>
        <NameRow/>
        <Row/>
        <ButtonAddRow/>
      </div>
    );
  }
}

export default Games;
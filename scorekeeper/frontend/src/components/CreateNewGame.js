import React, { Component } from 'react';

class CreateNewGame extends Component {
    state = {
        players: ["", "", "", ""]
    }

    handleChange = (index, value) => {
        const newPlayers = this.state.players.map((name, pIndex) => pIndex === index ? value : name);
        this.setState({ players: newPlayers });
    }

    _onClick = () => this.props.startGame(this.state.players);

    render() {
        const nameInputs = this.state.players.map((name, index) => (
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={`Player ${index + 1} name`}
                    value={name}
                    onChange={(event) => this.handleChange(index, event.target.value)}
                />
            </div>
        ))

        return (
            <form method="POST" action="/">
                {nameInputs}
                <button className="button_glow" onClick={this._onClick} >Create a new game</button>
            </form>

        );
    }
}

export default CreateNewGame;
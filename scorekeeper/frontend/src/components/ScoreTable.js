import React, { Component } from 'react';
import ScoreRound from './ScoreRound';

class ScoreTable extends Component {
    state = {
        playerScore: [[]],
        sumOfPlayerScore: [0, 0, 0, 0],
        sumOfScore: 0,
        roundNumber: 1
    }
    
    _onAddRound = ()=>{
        let rounds = this.state.playerScore;
        let number = this.state.roundNumber;
        number += 1;
        rounds.push([]);
        this.setState({playerScore: rounds})
        this.setState({roundNumber: number})
    };

    _onChangeScore = (rowIndex, colIndex, scoreInput) => {
        let scores = this.state.playerScore;
        let sumOfScore = 0;
        let sumOfPlayerScore = [0, 0, 0, 0];
        let NUMBER_LOOP = this.state.roundNumber;

        // while (true) {
        //     if (scoreInput === '-') {
        //         let score = '' + '-';
        //     } else {
        //         score += '-';
        //         break;
        //     }
        // }
        

        if (!isNaN(scoreInput)) {
            scores[rowIndex][colIndex] = scoreInput;
        } else {
            scores[rowIndex][colIndex] = 0;
        }
        
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < NUMBER_LOOP; j++) {
                if (isNaN(parseInt(scores[j][i], 10))) {
                    sumOfPlayerScore[i] += 0;
                } else {
                    sumOfPlayerScore[i] += parseInt(scores[j][i], 10);
                }
                
            }
            sumOfScore += sumOfPlayerScore[i];
        }
        
        this.setState({ sumOfPlayerScore: sumOfPlayerScore });
        this.setState({ sumOfScore: sumOfScore });
        this.setState({ playerScore: scores });
    }

    _addingRound = (roundNumber, scores) => {
        let rounds = [];
        for (let i = 0; i < roundNumber; i++) {
            rounds.push(
                <ScoreRound
                    round={i + 1}
                    playerScore={[scores[i][0], scores[i][1], scores[i][2], scores[i][3]]}
                    onChangeScore={this._onChangeScore}
                />
            )
        }
        return rounds;
    }   

    render() {
        const playerName = this.props.playerNames.map((name, index) => (
            <td className="player-name">{name}</td>
        ));

        const totalPlayerScore = this.state.sumOfPlayerScore.map((score) => (
            <th>{score}</th>
        ));

        return (
            <div>
                <table id="table">
                    <tr>
                        <td></td>
                        {playerName}
                    </tr>
                    <tr className="sum-of-score">
                        <th>Sum of Score(<span>{this.state.sumOfScore}</span>)</th>
                        {totalPlayerScore}
                    </tr>
                    {this._addingRound(this.state.roundNumber, this.state.playerScore)}

                </table>
                <button className="button_glow btn-add-round" onClick={this._onAddRound} >ADD ROUND</button>
            </div>
        );
    }
}

export default ScoreTable;
import React, { Component } from 'react';
import './App.css';

const API = (timeFrame, league) => `https://api.football-data.org/v1/fixtures?timeFrame=${timeFrame}&league=${league}`;
const TOKEN = `55c80c80e4244c8381fcb3ee8097a360`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      fixtures: {}
    }
  }

  componentDidMount() {
    fetch(API(this.props.timeFrame, this.props.league), { method: 'GET', headers: { 'X-Auth-Token': TOKEN } })
      .then(data => data.json())
      .then(data => {
        this.setState({
          data: data,
          fixtures: data.fixtures
        })
      });
  }

  render() {
    const fixtures = this.state.fixtures;
    var fixtureRows = [];
    
    for (var i = 0; i < fixtures.length; i++) {
      let winner = "draw";
      let game = fixtures[i];

      if (game.result.goalsHomeTeam !== game.result.goalsAwayTeam) {
        var winner = game.result.goalsHomeTeam > game.result.goalsAwayTeam ? "home-win" : "away-win";
      }

      fixtureRows.push(
        <tr className={winner}>
          <td className="team home">{game.homeTeamName}</td>
          <td className="result home">{game.result.goalsHomeTeam}</td>
          <td className="result away">{game.result.goalsAwayTeam}</td>
          <td className="team away">{game.awayTeamName}</td>
        </tr>
      )
    }

    return (
      <div>
        <table>
          <tr>
            <th colspan="2">Home</th>
            <th colspan="2">Away</th>
          </tr>
          {fixtureRows}
        </table>
      </div>
    )
  }
}

export default App;

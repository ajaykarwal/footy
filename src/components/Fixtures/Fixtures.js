import React from 'react';

const API = (timeFrame, league) => `https://api.football-data.org/v1/fixtures?timeFrame=${timeFrame}&league=${league}`;
const TOKEN = `55c80c80e4244c8381fcb3ee8097a360`;

class Fixtures extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            fixtures: {}
        }

        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(timeFrame, league) {
//        console.log(this.props.timeFrame, this.props.league);
        fetch(API(timeFrame, league), { method: 'GET', headers: { 'X-Auth-Token': TOKEN } })
        .then(data => data.json())
        .then(data => {
            this.setState({
                data: data,
                fixtures: data.fixtures
            })
        });
    }
    componentDidMount() {
        console.log('mount');
        this.fetchData(this.props.timeFrame, this.props.league); 
    }

    componentWillReceiveProps(nextProps) {
        console.log('willreceiveprops');
        const { timeFrame, league } = nextProps;
        this.fetchData(timeFrame, league);
    }

    render() {
        console.log('render');
        const fixtures = this.state.fixtures;
        var fixtureRows = [];

        for (var i = 0; i < fixtures.length; i++) {
            let winner = "draw";
            let game = fixtures[i];

            if (game.result.goalsHomeTeam !== game.result.goalsAwayTeam) {
                var winner = game.result.goalsHomeTeam > game.result.goalsAwayTeam ? "home-win" : "away-win";
            }

            fixtureRows.push(
                <tr key={i} className={winner}>
                    <td className="team home">{game.homeTeamName}</td>
                    <td className="result home">{game.result.goalsHomeTeam}</td>
                    <td className="result away">{game.result.goalsAwayTeam}</td>
                    <td className="team away">{game.awayTeamName}</td>
                </tr>
            )
        }

        return fixtureRows;
    }
}

export default Fixtures;
import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls/Controls';
import Fixtures from './components/Fixtures/Fixtures';

class App extends Component {
    constructor(props) {
		super(props);

        this.state = {
            timeframeValue: 'p14',
            leagueValue: 'PL'
        };
        this.handleTimeFrameChange = this.handleTimeFrameChange.bind(this);
		this.handleLeagueChange = this.handleLeagueChange.bind(this);
	}

    handleTimeFrameChange(event) {
        console.log(event.target.value);
        this.setState({timeframeValue: event.target.value});
    }

    handleLeagueChange(event) {
        console.log(event.target.value);
        this.setState({leagueValue: event.target.value});
    }


    render() {
        return (
            <div>
                <Controls ontimeframeChange={this.handleTimeFrameChange} onLeagueChange={this.handleLeagueChange} timeframeValue={this.state.timeframeValue} leagueValue={this.state.leagueValue} />
                <table>
                <tbody>
                    <tr>
                        <th colSpan="2">Home</th>
                        <th colSpan="2">Away</th>
                    </tr>
                    <Fixtures timeFrame={this.state.timeframeValue} league={this.state.leagueValue} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;

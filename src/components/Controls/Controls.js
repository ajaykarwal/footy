import React from 'react';


const Controls = ({ontimeframeChange,onLeagueChange, timeframeValue, leagueValue }) => (
    <div className="controls">
        <select name="timeFrame" id="timeFrame" onChange={ontimeframeChange} value={timeframeValue}>
            <option value="">Please select a time frame</option>
            <option value="p30">Last 30 Days</option>
            <option value="p14">Last 14 Days</option>
            <option value="p7">Last 7 Days</option>
            <option value="n7">Next 7 Days</option>
            <option value="n14">Next 14 Days</option>
            <option value="n30">Next 30 Days</option>
        </select>
        <select name="league" id="league" onChange={onLeagueChange} value={leagueValue}>
            <option value="">Please select a league</option>
            <option value="BL1">1. Bundesliga</option>
            <option value="BL2">2. Bundesliga</option>
            <option value="BL3">3. Bundesliga</option>
            <option value="DFB">Dfb-Cup</option>
            <option value="PL">Premiere League</option>
            <option value="EL1">League One</option>
            <option value="ELC">Championship</option>
            <option value="FAC">FA-Cup</option>
            <option value="SA">Serie A</option>
            <option value="SB">Serie B</option>
            <option value="PD">Primera Division</option>
            <option value="SD">Segunda Division</option>
            <option value="CDR">Copa del Rey</option>
            <option value="FL1">Ligue 1</option>
            <option value="FL2">Ligue 2</option>
            <option value="DED">Eredivisie</option>
            <option value="PPL">Primeira Liga</option>
            <option value="GSL">Super League</option>
            <option value="CL">Champions-League</option>
            <option value="EL">UEFA-Cup</option>
            <option value="EC">European-Cup of Nations</option>
            <option value="WC">World-Cup</option>
        </select>
    </div>
)





export default Controls;
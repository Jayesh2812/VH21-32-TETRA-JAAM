import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'

<GaugeChart id="gauge-chart1" />

export class Result extends Component {
    render() {
        return (
            <div>
                {/* <GaugeChart id="gauge-chart1" /> */}
                <GaugeChart id="gauge-chart3" 
                cornerRadius={3} 
            nrOfLevels={3} 
            percent={0.67} 
            needleColor="white"
            // animate="false"
            hideText="True"
/>
            </div>
        )
    }
}

export default Result

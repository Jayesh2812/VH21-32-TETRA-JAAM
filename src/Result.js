import GaugeChart from 'react-gauge-chart'

<GaugeChart id="gauge-chart1" />

function Result({percent}){
    console.log(percent)
        return (
            <div>
                {/* <GaugeChart id="gauge-chart1" /> */}
                <GaugeChart id="gauge-chart3" 
                cornerRadius={3} 
            nrOfLevels={3} 
            percent={percent} 
            needleColor="white"
            // animate="false"
            hideText="True"
/>
            </div>
        )
}

export default Result

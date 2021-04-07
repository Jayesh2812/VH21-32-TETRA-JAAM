import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import './css/AgeChart.css'
function AgeChart({data1}) {
    var color="white"
    var width = window.innerWidth
    width = width-100;
    return (
        <div className="age-chart">
      <h4 class="chart-title">Age Plot</h4>
            <XYPlot yDomain={[0, 100]} xType="ordinal" width={width} height={300} xDistance={100} >
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis style={{
                    text: { stroke: 'none', fill: color, fontWeight: 600 }
                }} />
                <YAxis title={"Percentage"} style={{
                    text: { stroke: 'none', fill: color, fontWeight: 600 },
                    title: {stroke: 'none', fill: color, fontWeight: 600},
                    line: {stroke: color},
        }} />
                <VerticalBarSeries data={data1} barWidth={.4} />
            </XYPlot>
        </div>
    )
}
export default AgeChart
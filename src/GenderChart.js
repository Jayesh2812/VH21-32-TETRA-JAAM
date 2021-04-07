import { XYPlot, XAxis, Hint, YAxis, VerticalBarSeries } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './css/Charts.css'
function GenderChart({ data1 }) {
  var color = 'white'
  return (
    <div className="double-slider-chart">
      <h4 class="chart-title">Gender Plot</h4>
      <XYPlot yDomain={[0, 100]} xType="ordinal" width={250} height={250} xDistance={100} >
        <XAxis hideLine style={{
          text: { stroke: 'none', fill: 'white', fontWeight: 600 }
        }} />
        <YAxis title={"Percentage"} style={{
          text: { stroke: 'none', fill: color, fontWeight: 600 },
           title: { stroke: 'none', fill: color, fontWeight: 600 },
          line: {stroke: color},
        }} />
        <VerticalBarSeries onValueMouseOver={(datapoint,e)=>{console.log(e)}} 
        data={data1} barWidth={0.4}  />
      </XYPlot>
    </div>
  )
}
export default GenderChart
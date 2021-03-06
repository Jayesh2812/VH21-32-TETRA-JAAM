import {useEffect} from 'react';
// import BarCharts from './BarCharts';
import CardiologistList from './CardiologistList'
import SmokingAlcoholChart from './SmokingAlcoholChart';
import GenderChart from './GenderChart';
import AgeChart from './AgeChart';
import Result from './Result';
import BMI from './BMI';

import './css/Output.css'

function Output({pred_data}){
    var gender_data = [{ x: 'Men', y: 50.5 }, { x: 'Women', y: 49.6 }]
    var age_data = [{ x: '0-20', y: 0 },
                    { x: '20-40', y: 25.27 },
                    { x: '40-60', y: 69.63 },
                    { x: '60-80', y: 30.11 },
                    ]
    var active = [{ x: 'Alcohol', y: 48.4 }, { x: 'Smokers', y: 47.4 }]
    var nonActive = [{ x: 'Alcohol', y: 50.8 }, { x: 'Smokers', y: 52.5 }]
    useEffect(()=>{
        alert("Result highly experimental DO NOT take seriously")
    },[])
    return (
        <div className="Output">
            <div className="charts">
                <GenderChart data1={gender_data} />
                <SmokingAlcoholChart data1={active} data2={nonActive} />
            </div>
            <div className="prediction-output">
                <h2 class="title" >Prediction</h2>
                <Result percent={pred_data.percentage}/>
                <h3 class="bmi-title">Risk Percentange : <strong>{pred_data.percentage * 100}% </strong></h3>
                <br/>
                <h3 class="bmi-title"> {pred_data.result}</h3><br/>
                <BMI bmi={pred_data.BMI}/>
               
            </div>
            <div className="doctor-info">
                <h2 class="title" >Cardiologists Near You</h2>
                <CardiologistList/>
            </div>
            <AgeChart data1={age_data}/>

    </div>
    )
}

export default Output
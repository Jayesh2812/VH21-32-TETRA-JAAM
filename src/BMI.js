import './css/BMI.css'
import underweight from './images/underweight.png'
import normal from './images/normal.png'
import overweight from './images/overweight.png'
import obese from './images/obese.png'
import extremelyObese from './images/extremely-obese.png'
function BMI({bmi}){
    var src ;
    var category;
    if (!bmi){
        category = ""
    }
    else if (bmi < 18.5 ){
        src = underweight
        category = "UNDERWEIGHT"
    }
    else if( bmi < 24.9){
        src = normal
        category = "NORMAL"
    }
    else if(bmi < 29.9){
        src = overweight
        category = "OVERWEIGHT"
    }
    else if(bmi < 34.9){
        src = obese
        category = "OBESE"
    }
    else {
        src = extremelyObese
        category = "EXTREMELY OBESE"
    }
    
    return(
        <div className="bmi-div">
            <h3 class="bmi-title">Your BMI is <strong>{bmi}</strong> classified as <strong>{category}</strong> </h3>
            <img class="bmi-image" src={src} alt=""/>
        </div>
    )
}
export default BMI
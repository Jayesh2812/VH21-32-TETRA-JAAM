import './css/BMI.css'

function BMI({bmi}){
    var src =''
    if (bmi < 18.5 ){
        src = 'underweight.jpg'
    }
    else if( bmi < 24.9){
        src = 'normal.jpg'
    }
    else if(bmi < 29.9){
        src = 'overweight.jpg'
    }
    else if(bmi < 34.9){
        src = 'obese.jpg'
    }
    else {
        src = 'extremely-obese.jpg'
    }
    
    return(
        <div className="bmi-div">
            <img src="" alt=""/>
        </div>
    )
}
export default BMI
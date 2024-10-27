import { useState } from 'react'
import './App.css'
import poster from "./assets/gym.jpeg"

function App() {
const [height,setHeight]=useState("");
const [weight,setWeight]=useState("");
const [bmi, setBmi]=useState(null);
const [bmiStatus, setBmiStatus]=useState("");
const [errorMessage,setErrorMessage]=useState("")

const calculateBmi=()=>{

  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);

  if(isValidHeight && isValidWeight){
    const heightInMeters= height/100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if(bmiValue < 18.5){
      setBmiStatus("Underweight")
    }else if(bmiValue >=18.5 && bmiValue < 24.9){
      setBmiStatus("Normal Weight")
    }else if(bmiValue >= 25 && bmiValue <29.9){
      setBmiStatus("Overweight")
    }else{
      setBmiStatus("Obese")
    }
    setErrorMessage("")
  }else{
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("Please enter valid numaric values for height and weight.")
  }
}

const clearAll = ()=>{
  setHeight("");
  setWeight("");
  setBmi(null);
  setBmiStatus("");
}
  return (
    <>
      <div className="app-container shadow">
          <div className="banner">
            <img src={poster} alt="Poster" />
          </div>
          <div className="content p-3 d-flex flex-column">
            <h5 className='text-center text-info fw-bold'>BMI Calculator</h5>
          <div className="input-group mt-2">
          <label className="form-label w-100 my-1" htmlFor="height">Height (cm):</label>
          <input className="form-control" value={height} type="text" id="height" onChange={(e)=> setHeight(e.target.value)} />
        </div>
        <div className="input-group mt-2">
          <label className="form-lable w-100 my-1" htmlFor="weight">Weight (kg):</label>
          <input className="form-control" value={weight} type="text" id="weight" onChange={(e)=> setWeight(e.target.value)} />
        </div>
        <div className='d-flex justify-content-center align-items-center gap-2 mt-4'>
        <button className="btn btn-sm btn-info" onClick={calculateBmi}>Calculate BMI</button>
        <button className="btn btn-sm btn-danger" onClick={clearAll}>Clear</button>
       
        </div>

        {errorMessage &&  <p className='text-danger text-center mt-4'>{errorMessage}</p>}
{bmi!== null && (
          <div className="result border border-info mt-2 p-2 rounded">
          <p className='text-info fw-semibold'>Your BMI is: <span>{bmi}</span></p>
          <p>Status: <span>{bmiStatus}</span></p>
        </div>
)}
          </div>
      </div>
    </>
  )
}

export default App

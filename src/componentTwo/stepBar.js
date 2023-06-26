import React, { useContext } from 'react'
import "../component/style.css";
import { multiStepContent } from '../stepContext';

const StepBar = () => {
    const { step, formData } = useContext(multiStepContent);
  return (
    <div className='stepbar-wrapper'>
        <ul className="progressbar">
            <li className={`active ${step===1 && !formData.length ? "" : "complete"}`}>StepOne</li>
            <li className={` ${step===2 ? "active" : !formData.length && (step===3 || step===4) ? "complete": ""}`}>StepTwo</li>
            <li className={` ${step===3 ? "active" : !formData.length && step===4 ? "complete": ""}`}>StepThree</li>
            <li className={` ${step===4 ? "active" : !formData.length && step===4 ? "complete": ""}`}>StepFour</li>
        </ul>
    </div>
  )
}

export default StepBar
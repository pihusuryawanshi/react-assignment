import React, { useContext } from 'react'
import { multiStepContent } from '../stepContext';
import StepOne from '../component/stepOne';
import StepTwo from '../component/stepTwo';
import StepThree from '../component/stepThree';
import StepFour from '../component/stepFour';
import DisplayData from '../component/displayData';

const TaskOne = () => {
    const { step } = useContext(multiStepContent);
    return (
        <div className="App">
            <h1>Application with useContext</h1>
            {step === 1 && (
                <StepOne />
            )}
            {step === 2 && (
                <StepTwo />
            )}
            {step === 3 && (

                <StepThree />
            )}
            {step === 4 && (
                <StepFour />
            )}
            {step === 5 && (
                <DisplayData />
            )}
        </div>
    )
}

export default TaskOne
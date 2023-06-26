import React from 'react'
import ReusableButton from '../reusableComponent/button'
import ReusableInputField from '../reusableComponent/input'

import StepBar from './stepBar'

const StepTwo = ({userData, setUserData, nextStep, errors, prevStep}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((userData) => ({ ...userData, [name]: value }));
    };

    return (
        <div>
            <StepBar />
            <div className="form-wrapper">
                <form>
                    <div>
                        <ReusableInputField
                            label="Your Email"
                            value={userData.email}
                            onChange={(e) => handleChange(e)}
                            name="email"
                            placeholder="test@mailbox.com"
                            required
                            type="email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <ReusableInputField
                            label="Confirm Email"
                            value={userData.confirmEmail}
                            onChange={(e) => handleChange(e)}
                            name="confirmEmail"
                            placeholder="Confirm Email"
                            required
                            type="email"
                        />
                        {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
                    </div>
                        <ReusableButton onClick={prevStep}>Previous</ReusableButton>
                        <ReusableButton onClick={nextStep}>Next</ReusableButton>
                </form>
            </div>
        </div>
    )
}

export default StepTwo
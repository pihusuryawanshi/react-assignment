import React from 'react'
import ReusableInputField from '../reusableComponent/input'
import ReusableButton from '../reusableComponent/button'
import StepBar from './stepBar';

const StepThree = ({userData, setUserData, nextStep, errors, prevStep}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((userData) => ({ ...userData, [name]: value }));
    };

    return (
        <div>
            <StepBar />
            <div className="form-wrapper">
                <div>
                    <ReusableInputField
                        label="Password"
                        value={userData.password}
                        onChange={(e) => handleChange(e)}
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <ReusableInputField
                        label="Confirm Password"
                        value={userData.confirmPassword}
                        onChange={(e) => handleChange(e)}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        type="password"
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                    <ReusableButton onClick={prevStep}>Previous</ReusableButton>
                    <ReusableButton onClick={nextStep}>Next</ReusableButton>
            </div>
        </div>
    )
}

export default StepThree
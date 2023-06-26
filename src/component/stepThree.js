import React, { useContext } from 'react'
import ReusableInputField from '../reusableComponent/input'
import ReusableButton from '../reusableComponent/button'
import { multiStepContent } from '../stepContext';
import StepBar from './stepBar';

const StepThree = () => {
    const { formData, setFormData, nextStep, prevStep, errors } = useContext(multiStepContent);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    return (
        <div>
            <StepBar />
            <div className="form-wrapper">
                <div>
                    <ReusableInputField
                        label="Password"
                        value={formData.password}
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
                        value={formData.confirmPassword}
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
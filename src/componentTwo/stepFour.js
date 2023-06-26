import React from 'react'
import ReusableButton from '../reusableComponent/button'
import ReusableInputField from '../reusableComponent/input'
import StepBar from './stepBar';

const StepFour = ({ userData, setUserData, prevStep, submitData, errors }) => {
    const handleChange = (e) => {
        const { name, checked } = e.target;
        setUserData((userData) => ({ ...userData, [name]: checked }));
    };

    return (
        <div>
            <StepBar />
            <div className="form-wrapper">
                <h5>By clicking "Accept" I agree that:</h5>
                <ul>
                    <li><p>I have read and accepted the <span>User Agreement</span></p></li>
                    <li><p>I have read and accepted the <span>Privacy Policy</span></p></li>
                    <li><p>I am at atleast 18 years old</p></li>
                </ul>
                <div>
                    <div className='flex-css'>
                        <ReusableInputField
                            checked={userData?.acceptAgreement}
                            onChange={(e) => handleChange(e)}
                            name="acceptAgreement"
                            required
                            type="checkbox"
                        />
                        <label>Accept</label>
                    </div>
                    {errors.acceptAgreement && <p className="error">{errors.acceptAgreement}</p>}
                </div>
                <ReusableButton onClick={prevStep}>Previous</ReusableButton>
                <ReusableButton onClick={submitData}>Submit</ReusableButton>
            </div>
        </div>
    )
}

export default StepFour
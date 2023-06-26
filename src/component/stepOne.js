import React, { useContext } from 'react'
import ReusableInputField from '../reusableComponent/input'
import ReusableButton from '../reusableComponent/button'
import "./style.css"
import { multiStepContent } from '../stepContext'
import StepBar from './stepBar'

const StepOne = () => {
    const { formData, setFormData, nextStep, errors } = useContext(multiStepContent);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleChange({ target: { name: 'file', value: file } });
    };


    return (
        <div>
            <StepBar />
            <div className="form-wrapper">
                <form>
                    <div>
                        <ReusableInputField
                            label="First Name"
                            value={formData.firstName}
                            onChange={(e) => handleChange(e)}
                            name="firstName"
                            placeholder="First Name"
                            required
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>
                    <div>
                        <ReusableInputField
                            label="Second Name"
                            value={formData.secondName}
                            onChange={(e) => handleChange(e)}
                            name="secondName"
                            placeholder="Second Name"
                        />
                        {errors.secondName && <p className="error">{errors.secondName}</p>}
                    </div>
                    <div>
                        <ReusableInputField
                            label="Last Name"
                            value={formData.lastName}
                            onChange={(e) => handleChange(e)}
                            name="lastName"
                            placeholder="Last Name"
                            required
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                    <div>
                        <div className="radio-input">
                            <ReusableInputField
                                label="Gender"
                                value="male"
                                onChange={(e) => handleChange(e)}
                                name="gender"
                                type="radio"
                                required
                                placeholder="Male"
                                checked={formData.gender === "male"}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="radio-input">
                            <ReusableInputField
                                value="female"
                                onChange={(e) => handleChange(e)}
                                name="gender"
                                type="radio"
                                required
                                placeholder="Female"
                                checked={formData.gender === "female"}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                        {errors.gender && <p className="error">{errors.gender}</p>}
                    </div>
                    <div className="input-field-container">
                        <label htmlFor="country">Select City</label>
                        <select
                            className="input-field"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select City</option>
                            <option value="dewas">Dewas</option>
                            <option value="indore">Indore</option>
                            <option value="pune">Pune</option>
                            <option value="bhopal">Bhopal</option>
                        </select>
                        {errors.city && <p className="error">{errors.city}</p>}
                    </div>
                    <div>
                        <ReusableInputField
                            label="Upload Photo"
                            onChange={(e) => handleFileChange(e)}
                            name="file"
                            type="file"
                            required
                        />
                        {errors.file && <p className="error">{errors.file}</p>}
                    </div>
                    <ReusableButton onClick={nextStep}>Next</ReusableButton>
                </form>
            </div>
        </div>
    )
}

export default StepOne
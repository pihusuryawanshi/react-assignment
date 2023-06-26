import React, { createContext, useState } from 'react'
import App from './App';

export const multiStepContent = createContext();

const StepContext = () => {
    const [step, setStep] = useState(1);
    const [useStep, setUseStep] = useState(true);
    console.log("step", step);
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        lastName: '',
        gender: '',
        city: '',
        file: null,
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        acceptAgreement: false,
    });
    const [finalData, setFinalData] = useState([]);
    console.log("finalData", finalData);

    const [errors, setErrors] = useState({});


    const validateStep = () => {
        const stepErrors = {};

        if (step === 1) {
            if (!formData.firstName?.trim()) {
                stepErrors.firstName = 'First name is required';
            } else if (!/^[A-Za-z]+$/.test(formData.firstName.trim())) {
                stepErrors.firstName = 'First name should only contain alphabets';
            } if (!formData.secondName?.trim()) {
                stepErrors.secondName = 'Second name is required';
            } else if (!/^[A-Za-z]+$/.test(formData.secondName.trim())) {
                stepErrors.secondName = 'Second name should only contain alphabets';
            }
            if (!formData.lastName?.trim()) {
                stepErrors.lastName = 'Last name is required';
            } else if (!/^[A-Za-z]+$/.test(formData.lastName.trim())) {
                stepErrors.lastName = 'Last name should only contain alphabets';
            }
            if (!formData.gender) {
                stepErrors.gender = 'Gender is required';
            }
            if (!formData.city) {
                stepErrors.city = 'City is required';
            }
            if (!formData.file) {
                stepErrors.file = 'File is required';
            }
        } else if (step === 2) {
            if (!formData.email?.trim()) {
                stepErrors.email = 'Email is required';
            } else if (!isValidEmail(formData.email)) {
                stepErrors.email = 'Invalid email address';
            }
            if (!formData.confirmEmail?.trim()) {
                stepErrors.confirmEmail = 'Confirm email is required';
            } else if (formData.email !== formData.confirmEmail) {
                stepErrors.confirmEmail = 'Emails do not match';
            }
        } else if (step === 3) {
            if (!formData.password?.trim()) {
                stepErrors.password = 'Password is required';
            } else if (!isValidPassword(formData.password)) {
                stepErrors.password = 'Invalid password format';
            }

            if (!formData.confirmPassword?.trim()) {
                stepErrors.confirmPassword = 'Confirm password is required';
            } else if (formData.password !== formData.confirmPassword) {
                stepErrors.confirmPassword = 'Passwords do not match';
            }
        }
        if (step === 4) {
            if (!formData.acceptAgreement) {
              stepErrors.acceptAgreement = 'You must accept the agreement';
            }
          }

        return stepErrors;
        
    };

    const isValidEmail = (email) => {
        // Basic email validation pattern
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        // Password format regular expression
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]).{8,}$/;
        return passwordPattern.test(password);
    };

    const nextStep = () => {
        const stepErrors = validateStep();
    
        if (Object.keys(stepErrors).length === 0) {
          setErrors({});
          setStep((prevStep) => prevStep + 1);
        } else {
          setErrors(stepErrors);
        }
      };


    // const nextStep = () => {
    //     setStep((prevStep) => prevStep + 1);
    // };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const submitData = (e) => {
        e.preventDefault();
        const stepErrors = validateStep();
      
        if (Object.keys(stepErrors).length === 0) {
          setErrors({});
          setFinalData((finalData) => [...finalData, formData]);
          setFormData("");
          nextStep();
        } else {
          setErrors(stepErrors);
        }
      };
      
    return (
        <>
            <multiStepContent.Provider value={{ step, setStep, formData, setFormData, finalData, setFinalData, nextStep, prevStep, submitData, errors, useStep, setUseStep }}>
                <App />
            </multiStepContent.Provider>
        </>
    )
}

export default StepContext
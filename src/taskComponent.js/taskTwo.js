import React, { useState } from 'react'
import StepOne from '../componentTwo/stepOne';
import StepTwo from '../componentTwo/stepTwo';
import StepThree from '../componentTwo/stepThree';
import StepFour from '../componentTwo/stepFour';
import DisplayData from '../componentTwo/displayData';

const TaskTwo = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
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

    console.log("userData", userData);
    const [finalData, setFinalData] = useState([]);

    const [errors, setErrors] = useState({});


    const validateStep = () => {
        const stepErrors = {};
        if (step === 1) {
            if (!userData.firstName?.trim()) {
                stepErrors.firstName = 'First name is required';
            } else if (!/^[A-Za-z]+$/.test(userData.firstName.trim())) {
                stepErrors.firstName = 'First name should only contain alphabets';
            } if (!userData.secondName?.trim()) {
                stepErrors.secondName = 'Second name is required';
            } else if (!/^[A-Za-z]+$/.test(userData.secondName.trim())) {
                stepErrors.secondName = 'Second name should only contain alphabets';
            }
            if (!userData.lastName?.trim()) {
                stepErrors.lastName = 'Last name is required';
            } else if (!/^[A-Za-z]+$/.test(userData.lastName.trim())) {
                stepErrors.lastName = 'Last name should only contain alphabets';
            }
            if (!userData.gender) {
                stepErrors.gender = 'Gender is required';
            }
            if (!userData.city) {
                stepErrors.city = 'City is required';
            }
            if (!userData.file) {
                stepErrors.file = 'File is required';
            }
        } else if (step === 2) {
            if (!userData.email?.trim()) {
                stepErrors.email = 'Email is required';
            } else if (!isValidEmail(userData.email)) {
                stepErrors.email = 'Invalid email address';
            }
            if (!userData.confirmEmail?.trim()) {
                stepErrors.confirmEmail = 'Confirm email is required';
            } else if (userData.email !== userData.confirmEmail) {
                stepErrors.confirmEmail = 'Emails do not match';
            }
        } else if (step === 3) {
            if (!userData.password?.trim()) {
                stepErrors.password = 'Password is required';
            } else if (!isValidPassword(userData.password)) {
                stepErrors.password = 'Invalid password format';
            }

            if (!userData.confirmPassword?.trim()) {
                stepErrors.confirmPassword = 'Confirm password is required';
            } else if (userData.password !== userData.confirmPassword) {
                stepErrors.confirmPassword = 'Passwords do not match';
            }
        }
        if (step === 4) {
            if (!userData.acceptAgreement) {
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
    
      const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
      };
      const submitData = (e) => {
        e.preventDefault();
        const stepErrors = validateStep();
      
        if (Object.keys(stepErrors).length === 0) {
          setErrors({});
          setFinalData((finalData) => [...finalData, userData]);
          setUserData("");
          nextStep();
        } else {
          setErrors(stepErrors);
        }
      };
  return (
    <div className="App">
      <h1>Application with Parent Child Relationship</h1>
      {step === 1 && (
        <StepOne userData={userData} setUserData={setUserData} errors={errors} nextStep={nextStep} />
      )}
      {step === 2 && (

        <StepTwo userData={userData} setUserData={setUserData} errors={errors} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (

        <StepThree userData={userData} setUserData={setUserData} errors={errors} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (

        <StepFour userData={userData} setUserData={setUserData} errors={errors} submitData={submitData} prevStep={prevStep} />
      )}
      {step === 5 && (
      <DisplayData finalData={finalData} setStep={setStep}  />
      )}
    </div>
  )
}

export default TaskTwo
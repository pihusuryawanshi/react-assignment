import React, { useContext } from 'react'
import { multiStepContent } from '../stepContext';
import ReusableButton from '../reusableComponent/button';
import "./style.css";

const DisplayData = () => {
    const { finalData, setStep } = useContext(multiStepContent);
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Password</th>
                            <th>Confirm Password</th>
                            <th>Email</th>
                            <th>Confirm Email</th>
                        </tr>
                    </thead>
                    {finalData.length && finalData.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.firstName}</td>
                                    <td>{item.secondName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.city}</td>
                                    <td>{item.password}</td>
                                    <td>{item.confirmPassword}</td>
                                    <td>{item.email}</td>
                                    <td>{item.confirmEmail}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                {/* <ul key={index}>
                                <li><h5>First Name : {item.firstName}</h5></li>
                                <li><h5>Second Name : {item.secondName}</h5></li>
                                <li><h5>Last Name : {item.lastName}</h5></li>
                                <li><h5>Gender : {item.gender}</h5></li>
                                <li><h5>City : {item.city}</h5></li>
                                <li><h5>Password : {item.password}</h5></li>
                                <li><h5>Confirm Password : {item.confirmPassword}</h5></li>

                                <li><h5>Email : {item.email}</h5></li>
                                <li><h5>Confirm Email : {item.confirmEmail}</h5></li>
                            </ul> */}

            </div>
            <ReusableButton onClick={() => setStep(1)}>Back to Form</ReusableButton>
        </div>
    )
}

export default DisplayData
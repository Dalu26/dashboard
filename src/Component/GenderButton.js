import React from 'react';
import './GenderButton.css';
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

function GenderButton({genders, filterUsers, activeGender, loading}) {
    return (
        <div>
            {(activeGender === 0 && loading) &&  <div className="users__buttons" data-testid="gender-buttons" >
                    <div className="usersbtn-container" >
                        <div className="button-container">
                            <button className="usersbtn"> <HiUserGroup className="icon" /></button>
                            <p>All users</p>
                        </div>
                        <div className="button-container">
                            <button className="usersbtn-one"><FaMale className="icon" /></button>
                            <p>Male users</p>
                        </div>
                        <div className="button-container">
                            <button className="usersbtn-two"><FaFemale className="icon" /></button>
                            <p>Female users</p>
                        </div>
                    </div>
            </div>}  
            <div className="users__buttons" data-testid="gender-buttons">
                {genders.map((gender, index) => {
                return (
                    <div className="users__btn-container" key={index}>
                        <button className="users__btn" onClick={() => {filterUsers(gender)}}>
                            { gender === "all" && <HiUserGroup className="icon" />}
                            { gender === "male" && <FaMale className="icon" />}
                            { gender === "female" && <FaFemale className="icon" />}                      
                        </button>
                        <p>{gender} users</p>
                    </div>
                )
            })}
           
            </div>
        </div>
    )
}

export default GenderButton;
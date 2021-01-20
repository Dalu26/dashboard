import React from 'react';
import './GenderButton.css';
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

function GenderButton({genders, filterUsers}) {
    return (
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
    )
}

export default GenderButton;
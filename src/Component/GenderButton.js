import React from 'react';
import './GenderButton.css';
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import allGender from './StaticGender';

function GenderButton({genders, filterUsers, loading}) {
    const Gender = allGender.results;
    console.log(Gender, 'GEnder')
    return (
        <div>
            {loading && <div className="users__buttons" data-testid="gender-buttons" >
                {Gender.map((gender, i) =>{
                    return (
                    <div className="users__btn-container" key={i}>
                        <button className="users__btn" >
                            {gender.name === "all" && <i class="spinner pink loading fitted icon"></i>}
                            {gender.name === "male" &&<i class="notched teal circle loading fitted  icon"></i>}
                            {gender.name === "female" &&<i class="asterisk purple loading fitted icon"></i>}                     
                        </button>                   
                        <p>{gender.name} users</p>
                    </div>
                    )
                })}
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
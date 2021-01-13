import React from 'react';
import './Onboarding.css';
import SearchBar from '../Component/SearchBar'; 

class Onboarding extends React.Component {
    onSearchSubmit(term) {}
    render(){
        return (
        <div className="Onboarding">
            <div className="container">
                <div className="welcome-name">Hello, Emerald</div>
                    {/* <p id="name">Hello, Emerald</p> */}
                <div className="welcome-text">Welcome to your dashboard, kindly sort through the user base</div>

                <SearchBar onSubmit={this.onSearchSubmit} placeholder="Find a user" />

                <div className="show-users">Show Users</div>
                <div className="gender-section">
                    <div className="gender-container">
                        <button onClick="#" className="gender"></button>
                        <p>All Users</p>
                    </div>
                    <div className="gender-container">
                        <button className="gender"></button>
                        <p>Male Users</p>
                    </div>
                    <div className="gender-container">
                        <button className="gender"></button>
                        <p>Female Users</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Onboarding;
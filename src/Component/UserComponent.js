import React from 'react';
import './UserComponent.css' 

class UserComponent extends React.Component {
    render(){
        return (
        <div className="user">
            <div className ="image">
                <img className="profile" height="3rem" width="3rem" src={require('./profile.png')} />
            </div>
            <div className="user-detail">
                <div className="name">Shalom Chioma</div>
                <div className="address">9278 new road, kilcoole, waterford</div>
                <div className="footer">
                    <div className="footer-email">
                        <div>
                        </div>
                        <div>
                            brad.gibson@example.com
                        </div>
                    </div>
                    <div className="footer-phone">
                        <div>
                        </div>
                        <div>
                            011-962-7516
                        </div>
                    </div>
                </div>
            </div>
            <button className="footer-button">
                <div>
                </div>
            </button>
        </div>
        );
    }
}
export default UserComponent;
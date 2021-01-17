import React from 'react';
import './UserComponent.css';
import UserDetails from '../Screens/UserDetails';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          isHidden: true,
        };
      }


    handleToggleCardView =()=>{
        this.setState({isHidden: !this.state.isHidden})
      }

    render(){
        
        const {name, image, address, email, phone, 
        photo, username, old, home, eAddress, created, phoneNo, cellNo} = this.props;

        return (
            <div>
                <div className={`${this.state.isHidden  ? "scroll" : "scroll-one"}`}>
                    <div className="user">
                        <div className ="image">
                            <img className="profile" alt='profile' height="4rem" width="4rem" src={image} />
                        </div>
                        <div className="user-detail">
                            <div className="name">{name}</div>
                            <div className="address">{address}</div>
                            <div className="footer">
                                <div className="footer-email-div">
                                        <i class="grey mail  icon" />
                                    <div className="footer-email">
                                        {email}
                                    </div>
                                </div>
                                <div className="footer-phone-div">
                                        <i class="grey phone flipped  icon" />
                                    <div className="footer-phone">
                                        {phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={this.handleToggleCardView} className="footer-button">
                            <i  class="white arrow right small icon" />
                        </button>
                    </div>
            </div>
            <div className={`${!this.state.isHidden ? "userDetail-card-one" : "userDetail-card"} ${!this.state.handleToggleCardView ? '' : 'accordion'}`}>
                <UserDetails photo={photo} username={username} old={old} home={home} eAddress={eAddress} created={created} phoneNo={phoneNo} cellNo={cellNo} onMouseClick={this.handleToggleCardView} />
            </div>
        </div>
        );
    }
}
export default UserComponent;
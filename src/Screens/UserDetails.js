import React from 'react';
import './UserDetails.css';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.fetchUsers();
  }

  render(){

    const {photo, username, old, home, eAddress, created, phoneNo, cellNo, onMouseClick} = this.props;

    const joinedAt = new Date(created).getFullYear() + '-' + new Date(created).getMonth() + '-' + new Date(created).getDate();
    return (
      <div className="user-container">
          <a href="#" onClick={onMouseClick} className="result-button">RESULTS</a>
          <div className="user-profile">
              <div className="profile-img">
                <img className="profile-img-large" src={photo} height="11rem" width="11rem" />
              </div>
              <div className="profile-details">
                  <div className="bio">
                      <div className="bio-name">{username}</div>
                      <div className="bio-age">{old}</div>
                  </div>
                  <div className="profile-address">{home}</div>
                  <div className="profile-email">
                      <div className="email-text">{eAddress}</div>
                  </div>
                  <div className="joined">
                        <div>JOINED:</div>
                      <div className="joined-text">
                       {joinedAt}
                      </div>
                    </div>
                  <div className="phone">
                      <div className="profile-no">{phoneNo}</div>
                  </div>
                  <div className="phone">
                      <div className="profile-no">{cellNo}</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default UserDetails;

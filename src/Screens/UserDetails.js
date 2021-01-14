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

    const {image, name, age, address, email, joined, phone, cell, onClick} = this.props;
    return (
      <div className="user-container">
          <a href="#" onClick={onClick} className="result-button">RESULTS</a>
          <div className="user-profile">
              <div className="profile-img">
                <img className="profile-img-large" src={image} height="11rem" width="11rem" />
              </div>
              <div className="profile-details">
                  <div className="bio">
                      <div className="bio-name">{name}</div>
                      <div className="bio-age">{age}</div>
                  </div>
                  <div className="profile-address">{address}</div>
                  <div className="profile-email">
                      <div className="email-text">{email}</div>
                  </div>
                  <div className="joined">
                      <div className="joined-text">
                      JOINED: {joined}
                      </div>
                    </div>
                  <div className="phone">
                      <div className="profile-no">{phone}</div>
                  </div>
                  <div className="phone">
                      <div className="profile-no">{cell}</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default UserDetails;

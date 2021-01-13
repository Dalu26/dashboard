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
    return (
      <div className="user-container">
          <div className="user-profile">
              <div className="profile-img"></div>
              <div className="profile-details">
                  <div className="bio">
                      <div className="bio-name">Mrs. Shalom Chioma</div>
                      <div className="bio-age">25</div>
                  </div>
                  <div className="profile-address">9278 new road, kilcoole, waterford</div>
                  <div className="profile-email">
                      <div className="email-text">brad.gibson@example.com</div>
                  </div>
                  <div className="joined">
                      <div className="joined-text">
                      JOINED: 2002-05-21
                      </div>
                    </div>
                  <div className="phone">
                      <div className="profile-no">011-962-7516</div>
                  </div>
                  <div className="phone">
                      <div className="profile-no">011-962-7516</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default UserDetails;

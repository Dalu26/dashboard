import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
import './UserDetails.css';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){

    const {photo, username, old, home, eAddress, created, phoneNo, cellNo, onMouseClick} = this.props;

    const joinedAt = new Date(created).getFullYear() + '-' + new Date(created).getMonth() + '-' + new Date(created).getDate();
    return (
      <div className="user-container">
        <button onClick={onMouseClick} className="back-to-results-btn"> < BsArrowLeftShort className="back-arrow-icon"/> RESULTS</button>
          <div className="user-profile">
                <div className="profile-img">
                  <img className="profile-img-large" alt="profile" src={photo} height="100%" width="100%" />
                </div>
              <div className="profile-details">
                  <div className="bio">
                      <div className="bio-name">{username},</div>
                      <div className="bio-age">{old}</div>
                  </div>
                  <div className="profile-address">{home}</div>
                  <div className="profile-email">
                      <BiEnvelope className="ico" />
                      <div className="email-text">{eAddress}</div>
                  </div>
                  <div className="joined">
                        <div>JOINED: </div>
                      <div className="joined-text">
                       {joinedAt}
                      </div>
                    </div>
                  <div className="phone">
                      <FiPhoneCall className="ico" />
                      <div className="profile-no">{phoneNo}</div>
                  </div>
                  <div className="phone">
                      <BsPhone className="ico" />
                      <div className="profile-no">{cellNo}</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default UserDetails;

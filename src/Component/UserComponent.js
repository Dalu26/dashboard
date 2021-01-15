import React from 'react';
import axios from 'axios';
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


    // componentDidMount() {
    //     this.fetchUsers();
    //   }
    // fetchUsers = async () =>{
    //   const response = await axios.get('https://randomuser.me/api/?results=50')
    //   const users = response.data.results;
    //   // console.log(response.data)
    //   this.setState({users})
    //   console.log(users)
    // }

    handleToggleCardView =()=>{
        this.setState({isHidden: !this.state.isHidden})
      }

    render(){
        
        const {name, image, address, email, phone, onClick, 
        photo, username, old, home, eAddress, created, phoneNo, cellNo, propClass} = this.props;

        return (
            <div>
                <div className={`${this.state.isHidden  ? "scroll" : "scroll-one"}`}>
                    <div className="user">
                        <div className ="image">
                            <img className="profile" height="4rem" width="4rem" src={image} />
                        </div>
                        <div className="user-detail">
                            <div className="name">{name}</div>
                            <div className="address">{address}</div>
                            <div className="footer">
                                <div className="footer-email">
                                    <div>
                                    </div>
                                    <div>
                                        {email}
                                    </div>
                                </div>
                                <div className="footer-phone">
                                    <div>
                                    </div>
                                    <div>
                                        {phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={this.handleToggleCardView} className="footer-button">
                            <div>
                            </div>
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
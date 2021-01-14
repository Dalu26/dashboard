import React from 'react';
import axios from 'axios';
import './UserComponent.css' 

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
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

    render(){
        
        const {name, image, address, email, phone, onClick} = this.props;

        return (
        <div className="user">
            <div className ="image">
                <img className="profile" height="3rem" width="3rem" src={image} />
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
            <button onClick={onClick} className="footer-button">
                <div>
                </div>
            </button>
        </div>
        );
    }
}
export default UserComponent;
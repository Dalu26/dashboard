import React from 'react';
import './CardComponent.css';
import UserComponent from '../Component/UserComponent';
import UserDetails from './UserDetails'; 
// import SearchBar from '../Component/SearchBar';

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
        };
      }

      componentDidMount() {
        // this.fetchUsers();
      }
    
      // fetchUsers = async () => {
      //   const res = await fetch('https://randomuser.me/api/', { method: 'GET', headers })
      //   const data = await res.json();
      //   console.log(data)
      //   const users = this.setState({users: data}) 
      // }
    onSearchSubmit(term) {}

    
    render(){
        return (
        <div className=" br4 CardComponent">
            <div className="header">All Users</div>
            <div className="filter">Filter By</div>
            {/* <SearchBar onSubmit={this.onSearchSubmit} placeholder="Find in list" /> */}
            <div className="search-container">
              <input className="search-bar" type="text" placeholder="Find in list" />
              <div className="country"></div>
              <div className="switch-container">
                <div className="switch"></div>
                <div className="switch-country">Show Country</div>
              </div>
            </div>
            {/* <UserComponent /> */}
            <UserDetails />
        </div>
        );
    }
}
export default CardComponent;
import React from 'react';
import axios from 'axios';
import { CSVLink } from "react-csv";
import { FiSearch } from 'react-icons/fi';
import { IoIosCloudDownload } from 'react-icons/io';
import './CardComponent.css';
import UserComponent from '../Component/UserComponent';
import GenderButton from '../Component/GenderButton';


class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          search: '',
          gender: [],
          activeGender: [],
          sortButton: [],
          isHidden: true,
          loading: true,
          currentPage: 1,
          usersPerPage: 10,
          isPrevBtnActive: 'disabled',
          isNextBtnActive: '',
          pageBound: 3,
        };
      }

      //Fetch Users
      componentDidMount() {
        this.fetchUsers();
      }

      //Api Call to fetch users
    fetchUsers = async () =>{
      try{
        const response = await axios.get('https://randomuser.me/api/?page=6&results=60&seed=123')
        const users = response.data.results;
        this.setState({users})
        this.setState({sortButton: users})
  
        let userGender = users.map(user => user.gender);
        userGender = ["all", ...new Set(userGender)]
        this.setState({gender: userGender});
      } catch (error){
        this.setState({loading: false})
        console.log(error)
      }
      this.setState({loading: false})
    }

    //Search event
    onSearchSubmit=(event)=> {
      event.preventDefault();
    };


    //Pagination 
    handleClick =(event)=> {
      let userid = Number(event.target.id);
      this.setState({
        currentPage: userid
      });
      this.setPrevAndNextBtnClass(userid);
    }

    setPrevAndNextBtnClass(userid) {
      let totalPage = Math.ceil(this.state.users.length / this.state.usersPerPage);
      this.setState({isNextBtnActive: 'disabled'});
      this.setState({isPrevBtnActive: 'disabled'});
      if(totalPage === userid && totalPage > 1){
          this.setState({isPrevBtnActive: ''});
      }
      else if(userid === 1 && totalPage > 1){
          this.setState({isNextBtnActive: ''});
      }
      else if(totalPage > 1){
          this.setState({isNextBtnActive: ''});
          this.setState({isPrevBtnActive: ''});
      }
    }

    btnPrevClick = () => {
      let userid = this.state.currentPage - 1;
      this.setState({ currentPage : userid});
      this.setPrevAndNextBtnClass(userid);
    }

    btnNextClick =() => {
      let userid = this.state.currentPage + 1;
      this.setState({ currentPage : userid});
      this.setPrevAndNextBtnClass(userid);
    }
    //Pagination ends


    //Card view toggle
    handleToggleCardView =()=>{
      this.setState({isHidden: !this.state.isHidden})
    }


    render(){
        const { users, gender, sortButton, activeGender, currentPage, usersPerPage, loading, isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        //Users button sort
        const filterUsers = (gender) => {
          const genderUsers = sortButton.filter(user => (user.gender === gender))
          this.setState({users: genderUsers});
          this.setState({activeGender: `${gender} Users`});

          if(gender === "all"){
            this.setState({users: sortButton})
          this.setState({activeGender: 'All Users'})
          }
        }

        const searchedUsers = currentUsers.filter((searchRes) =>
            searchRes.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || searchRes.name.last.toLowerCase().includes(this.state.search.toLowerCase())
             
        )

        const filteredUsers = searchedUsers.map((filteredUser, i) => {
          return(
            <div key={i}>
                <UserComponent name={filteredUser.name.title + ' ' + filteredUser.name.first + ' ' + filteredUser.name.last} 
                image={filteredUser.picture.medium} address={filteredUser.location.street.number + ' ' + filteredUser.location.street.name + ', ' + filteredUser.location.city + ', ' + filteredUser.location.state} 
                email={filteredUser.email} phone={filteredUser.phone}

                photo={filteredUser.picture.large} username={filteredUser.name.title + ' ' + filteredUser.name.first + ' ' + filteredUser.name.last} old={filteredUser.dob.age} home={filteredUser.location.street.number + ' ' + filteredUser.location.street.name + ', ' + filteredUser.location.city + ', ' + filteredUser.location.state}
                eAddress={filteredUser.email} created={filteredUser.registered.date} phoneNo={filteredUser.phone} cellNo={filteredUser.cell}
                />
            </div>
          )
        })
        //Users sort ends

        //Download data as CSV
        const printUsersAsCSV = users.map((user) => {
          const {gender, name:{title, first, last}, location:{street:{number, name}, city, state, country, postcode, coordinates:{latitiude, longitude}, timezone:{offset, description}}, email, login:{username, password}, dob:{age}, phone, cell, registered:{date}, nat} = user;
          return (
             {gender, title, first, last, number, name, city, state, country, postcode, latitiude, longitude, offset, description, email, username, password, phone, cell, age, date, nat}
          )
      })
      const csvData = printUsersAsCSV;

        //Pagination buttons
        let renderPrevBtn = null;
         if(isPrevBtnActive === 'disabled') {
             renderPrevBtn = <div id="btnPrev" className="prev">
                <i class=" angle left  icon" />
             </div>
         }
         else{
            renderPrevBtn = <div id="btnPrev" onClick={this.btnPrevClick} className="prev">
              <i class=" black left angle left  icon" />
            </div>
         }

        let renderNextBtn = null;
         if(isNextBtnActive === 'disabled') {
             renderNextBtn = <div id="btnNext" className="next">
               <i class=" black angle right icon" />
             </div>
         }
         else{
          renderNextBtn = <div  id="btnNext" onClick={this.btnNextClick} className="next">
                <i class="white angle right  icon" />    
            </div>
         }
         //Pagination button ends here





        return (
            <div className="App">
              <div className="Onboarding">
                <div className="container">
                  <div className="welcome-name">Hello, <strong>Emerald</strong></div>
                  <div className="welcome-text">Welcome to your dashboard, kindly sort through the user base</div>
                  <form onSubmit={this.onSearchSubmit}>
                    <div className="search-form">
                        <FiSearch className="search-ico"/>
                        <input className="search" type="text" onChange={(e) => this.setState({search: e.target.value})} placeholder="Find a user" />
                    </div>
                    </form>

                  <div className="show-users">Show Users</div>
                  <GenderButton genders={gender} activeGender={activeGender.length} loading={loading} filterUsers={filterUsers}/>
              </div>
            </div>

                <div className="CardComponent">
                  <div className="header">{activeGender.length === 0 && "All Users"}{activeGender}</div>
                  <div className="filter">Filter By</div>
                  <div className="search-container">
                    <form onSubmit={this.onSearchSubmit}>
                      <div className="search-form-two">
                        <FiSearch className="search-ico-two" />
                        <input className="search-bar" type="text"  onChange={(e) => this.setState({search: e.target.value})} placeholder="Find in list" />
                      </div>
                    </form>
                  </div>
                    {loading && <div className="loading">
                        <i class="spinner pink loading fitted icon"></i>
                        <i class="notched teal circle loading fitted  icon"></i>
                        <i class="asterisk purple loading fitted icon"></i>
                    </div> }
                    <div className="accordion">
                      {filteredUsers}
                    </div>
                    <div className="footer-section">
                      <CSVLink className="list__download-btn" data={csvData}> <IoIosCloudDownload className="download-icon"/> Download Results</CSVLink>
                      <div className="pagination">
                        {renderPrevBtn}
                        {renderNextBtn}
                      </div>
                    </div>
              </div>
            </div>
        );
    }
}
export default CardComponent;
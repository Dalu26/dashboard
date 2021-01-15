import React from 'react';
import './CardComponent.css';
import UserComponent from '../Component/UserComponent';
import UserDetails from './UserDetails';
import axios from 'axios';

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          location: [],
          search: '',
          dropDown: '',
          isHidden: true,
          switchOn: true,
          currentPage: 1,
          usersPerPage: 6,
          upperPageBound: 3,
          lowerPageBound: 0,
          isPrevBtnActive: 'disabled',
          isNextBtnActive: '',
          pageBound: 3,
          // sortedCountries: [],
        };
      }

      componentDidMount() {
        this.fetchUsers();
      }

    fetchUsers = async () =>{
      const response = await axios.get('https://randomuser.me/api/?page=5&results=50&seed=123')
      const users = response.data.results;
      this.setState({users})
      // console.log(users)
    }

    // onSearchEnter = event => {
    //   const {users} = this.state;
    //   event.preventDefault();
    
    //   users.filter((users) =>
    //   users.location.country.toLowerCase().includes(this.state.search.toLowerCase()))
    //     //console.log(users)
  
    //   //onSubmit(this.state.search);
    // };


    onSearchSubmit=(event)=> {
      // const {users} = this.state;
      event.preventDefault();
      const user = this.state.users.filter((user) => user.name.first+user.name.last.includes(this.state.search))
      .map((result) => {
        return(
          <div >
            <UserComponent  onClick={this.handleToggleCardView} image={result.picture.medium} address={result.location.street.number + ' ' + result.location.street.name + ', ' + result.location.city + ', ' + result.location.state} email={result.email} phone={result.phone} />
          </div>
        )
      })
      // console.log(this.state.search);
      console.log(user, "searched")
    };

//     componentDidUpdate() {
//       $("ul li.active").removeClass('active');
//       $('ul li#'+this.state.currentPage).addClass('active');
// }


handleClick =(event)=> {
  let userid = Number(event.target.id);
  this.setState({
    currentPage: userid
  });
  // $("ul li.active").removeClass('active');
  // $('ul li#'+listid).addClass('active');
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
  if((this.state.currentPage -1)%this.state.pageBound === 0 ){
      this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
  }
  let userid = this.state.currentPage - 1;
  this.setState({ currentPage : userid});
  this.setPrevAndNextBtnClass(userid);
}
btnNextClick =() => {
  if((this.state.currentPage +1) > this.state.upperPageBound ){
      this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
  }
  let userid = this.state.currentPage + 1;
  this.setState({ currentPage : userid});
  this.setPrevAndNextBtnClass(userid);
}

handleToggleCardView =()=>{
  this.setState({isHidden: !this.state.isHidden})
}

handleSwitch =()=> {
  this.setState({switchOn: !this.state.switchOn})
}

handleDownload = async(event)=>{
  const {users} = this.state;
  // const name = users.name.title + ' ' + users.name.first + ' ' + users.name.last;
  // const address = users.location.street.number + ' ' + users.location.street.name + ', ' + users.location.city + ', ' + users.location.state;
  // const email = users.email;
  // const gender = users.gender; 
  // const phone = users.phone;
  // const URL = 'https://randomuser.me/api/?results=3'
  await axios.get('https://randomuser.me/api/?results=50&format=csv&dl')
};

    render(){
        const { sortedCountries, users, currentPage, usersPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
      
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        const user = currentUsers.map((user, i) => {
          return(
           <div key={i} >
             <UserComponent name={user.name.title + ' ' + user.name.first + ' ' + user.name.last} onClick={this.handleToggleCardView} image={user.picture.medium} address={user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state} email={user.email} phone={user.phone} />
           </div>
          )
       })

       const country = currentUsers.map((user) => {
         return(
            <option  key={user.location.country}>
            {user.location.country}
          </option>
         )
       })


        let renderPrevBtn = null;
         if(isPrevBtnActive === 'disabled') {
             renderPrevBtn = <div id="btnPrev" className="prev"><div ></div></div>
         }
         else{
            renderPrevBtn = <a href='#' id="btnPrev" onClick={this.btnPrevClick} className="prev"><div ></div></a>
         }

        let renderNextBtn = null;
         if(isNextBtnActive === 'disabled') {
             renderNextBtn = <div id="btnNext" className="next"><div></div></div>
         }
         else{
          renderNextBtn = <a href='#' id="btnNext" onClick={this.btnNextClick} className="next"><div></div></a>
         }

        return (
            <div className="CardComponent">
                <div className="header">All Users</div>
                <div className="filter">Filter By</div>
                <div className="search-container">
                  <form onSubmit={this.onSearchSubmit}>
                    <input className="search-bar" type="text" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} placeholder="Find in list" />
                  </form>
                  {/* <select value="country" className="country">
                    {country}
                  </select> */}
                  <select  className="country" onChange={(e) => this.setState({dropDown: e.target.value})}>
                    <option>country</option>
                      {country}
                  </select>
                  <div className="switch-container">
                    <a href="#" className={`${this.state.switchOn ? "switch" : "switch-one"}`}>
                      <button onClick={this.handleSwitch} className="inner-switch"></button>
                    </a>
                    <div className="switch-country">Show Country</div>
                  </div>
                </div>
                  <div className={`${this.state.isHidden  ? "scroll" : "scroll-one"}`}>
                    {user}
                  </div>
                  <div className="footer-section">
                    <button className="download" onClick={this.handleDownload}>Download Results</button>
                    <ul className="pagination">
                      {renderPrevBtn}
                      {renderNextBtn}
                    </ul>
                  </div>
                  <div className={`${!this.state.isHidden ? "userDetail-card-one" : "userDetail-card"}`}>
                      <UserDetails image="" name="fffff" age="ffff" onClick={this.handleToggleCardView} address="fff" email="fff" joined="fff" phone="fff" cell="fff" />
                  </div>
            </div>
        );
    }
}
export default CardComponent;
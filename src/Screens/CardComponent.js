import React from 'react';
import './CardComponent.css';
import UserComponent from '../Component/UserComponent';
import UserDetails from './UserDetails'; 
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Switch} from 'react-dom';
import axios from 'axios';
// import SearchBar from '../Component/SearchBar';

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          location: [],
          search: '',
          isHidden: true,
          currentPage: 1,
          usersPerPage: 3,
          upperPageBound: 3,
          lowerPageBound: 0,
          // isPrevBtnActive: 'disabled',
          // isNextBtnActive: '',
          pageBound: 3
        };
        this.handleClick = this.handleClick.bind(this);
        // this.btnDecrementClick = this.btnDecrementClick.bind(this);
        // this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        //this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
      }

      componentDidMount() {
        this.fetchUsers();
      }

    fetchUsers = async () =>{
      const response = await axios.get('https://randomuser.me/api/?page=3&results=50&seed=123')
      const users = response.data.results;
      this.setState({users})
      console.log(users)
    }

    onSearchEnter = event => {
      event.preventDefault();
  
      //onSubmit(this.state.search);
    };

    // renderUsercomponent = (item) =>{
    //   const {users} = this.state;
    //   if(users.length !== 0) {
    //     const user = users.map((user, i) => {
    //       return(
    //        <div key={i} >
    //          <UserComponent name={user.name.title + ' ' + user.name.first + ' ' + user.name.last} image={user.picture.medium} address={user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state} email={user.email} phone={user.phone} />
    //        </div>
    //       )
    //    })
    //    return(
    //     <div className="scroll">
    //       {user}
    //     </div>
    //   )
    //   }
    // }

    onSearchSubmit(term) {}

//     componentDidUpdate() {
//       $("ul li.active").removeClass('active');
//       $('ul li#'+this.state.currentPage).addClass('active');
// }
handleClick(event) {
  let listid = Number(event.target.id);
  this.setState({
    currentPage: listid
  });
  // $("ul li.active").removeClass('active');
  // $('ul li#'+listid).addClass('active');
  // this.setPrevAndNextBtnClass(listid);
}
// setPrevAndNextBtnClass(listid) {
//   let totalPage = Math.ceil(this.state.todos.length / this.state.todosPerPage);
//   this.setState({isNextBtnActive: 'disabled'});
//   this.setState({isPrevBtnActive: 'disabled'});
//   if(totalPage === listid && totalPage > 1){
//       this.setState({isPrevBtnActive: ''});
//   }
//   else if(listid === 1 && totalPage > 1){
//       this.setState({isNextBtnActive: ''});
//   }
//   else if(totalPage > 1){
//       this.setState({isNextBtnActive: ''});
//       this.setState({isPrevBtnActive: ''});
//   }
// }
btnPrevClick() {
  if((this.state.currentPage -1)%this.state.pageBound === 0 ){
      this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
  }
  let listid = this.state.currentPage - 1;
  this.setState({ currentPage : listid});
  // this.setPrevAndNextBtnClass(listid);
}
btnNextClick() {
  if((this.state.currentPage +1) > this.state.upperPageBound ){
      this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
  }
  let listid = this.state.currentPage + 1;
  this.setState({ currentPage : listid});
  //this.setPrevAndNextBtnClass(listid);
}

handleToggleCardView =()=>{
  this.setState({isHidden: !this.state.isHidden})
}
// download = async (mimetype, path)=>{
//   const {users} = this.state;
  
//     var res = new Blob([users], {type: 'text/csv'});
//     var csvURL = window.URL.createObjectURL(res);
// }
    render(){
        const { users, currentPage, usersPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
      
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
      // let pageIncrementBtn = null;
      //   if(pageNumbers.length > upperPageBound){
      //       pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
      //   }
      //   let pageDecrementBtn = null;
      //   if(lowerPageBound >= 1){
      //       pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
      //   }
        let renderPrevBtn = null;
        // if(isPrevBtnActive === 'disabled') {
        //     renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
        // }
        // else{
        //     renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
        // }
        renderPrevBtn = <a href='#' id="btnPrev" onClick={this.btnPrevClick} className="prev"><div ></div></a>

        let renderNextBtn = null;
        renderNextBtn = <a href='#' id="btnNext" onClick={this.btnNextClick} className="next"><div></div></a>
        // if(isNextBtnActive === 'disabled') {
        //     renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
        // }
        // else{
        //     renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></li>
        // }

        return (
            <div className="CardComponent">
                <div className="header">All Users</div>
                <div className="filter">Filter By</div>
                {/* <SearchBar onSubmit={this.onSearchSubmit} placeholder="Find in list" /> */}
                <div className="search-container">
                  <form onSubmit={this.onSearchEnter}>
                    <input className="search-bar" type="text" value={this.state.search} onChange={e => this.setState({ search: e.target.value })} placeholder="Find in list" />
                  </form>
                  <div className="country"></div>
                  <div className="switch-container">
                    <div className="switch"></div>
                    <div className="switch-country">Show Country</div>
                  </div>
                </div>
                  <div className={`${this.state.isHidden  ? "scroll" : "scroll-one"}`}>
                    {user}
                  </div>
                  <div className="footer-section">
                    <button className="download" onClick={this.download}>Download Results</button>
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
import React from 'react';
import './App.css';
import Onboarding from './Screens/Onboarding';
import CardComponent from './Screens/CardComponent';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends React.Component {
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
  render(){
    return (
      <Router>
        <div className="App">
          <Onboarding {...this.props} />
          <CardComponent  {...this.props} />
        </div>
      </Router>
    );
  }
}

export default App;

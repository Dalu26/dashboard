import React from 'react';
import './App.css';
import Onboarding from './Screens/Onboarding';
import CardComponent from './Screens/CardComponent';

class App extends React.Component {
  render(){
    return (
        <div className="App">
          <Onboarding {...this.props} />
          <CardComponent  {...this.props} />
        </div>
    );
  }
}

export default App;

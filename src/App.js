import React from 'react';
import './App.css';
import CardComponent from './Screens/CardComponent';

class App extends React.Component {
  render(){
    return (
        <div className="App">
          <CardComponent {...this.props} />
        </div>
    );
  }
}

export default App;

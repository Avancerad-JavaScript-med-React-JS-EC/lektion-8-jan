import React from 'react';
import './App.css';
import LilComp from './Components/LilComponent';

class App extends React.Component {

  styles={
    fontWeight: 'bold',
    color: 'hotpink'
  }

  render() {
    return(
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <LilComp />
      </div>
    )
  }
}

export default App;

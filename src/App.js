import React, { Component } from 'react';
import './App.css';
import Filtre from './components/filtre';

class App extends Component {
  state = {}

  render() { 
    return ( 
      <div className="card-deck">
      <Filtre  />
      <div className="card"> 
      </div>  
      </div>
     );
  }
}
 
export default App;

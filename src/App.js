import React, { Component } from 'react';
import './App.css';
import Filtre from './components/filtre';
import MapContainer from './components/map1';
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    Map:{}
  }

  handelMap(t){
    console.log("spéccccccc",t);
    this.setState({Map: t});
  }

  render() {
    return ( 
      <div className="card-deck">
      <Filtre 
       changeMap={this.handelMap.bind(this)} 
      />
      <div className="card"> 
      <MapContainer position={this.state.Map} />
      </div>  
      </div>
     );
  }
}
 
export default App;

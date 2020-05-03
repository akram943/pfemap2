import React, { Component } from 'react';
import './App.css';
import Filtre from './components/filtre';
import MapContainer from './components/map1';
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    Map:{lat: 35.77799,
      lng: 10.8233}
  }

  handelMap(t){
    console.log("spéccccccc",t);
    this.setState({Map:{
      lat: t.Latitude,
			lng: t.Longitude
    } });
  }

  render() {
    console.log(this.state.Map);
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

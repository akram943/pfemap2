import React, { Component } from 'react';
import './App.css';
import Filtre from './components/filtre';
import MapContainer from './components/map1';
import AppOsm from './components/map2';
import Map from './components/Map/Map';

class App extends Component {
  state = {
    Map:{lat: 35.77799,
         lng: 10.8233},
    name:"",
    zoom:9
    }

  handelMap(t){
   // console.log("spéccccccc",t);
    this.setState({Map:{
                   lat: t.Latitude,
		               lng: t.Longitude
                   },
                   name:"",
                   zoom:9
   });
  }

  handelMarker(t){
    //console.log(t);
    this.setState({name:t,
                  zoom:12})
  }

  render() {
   // console.log(this.state.Map);
    return ( 
      <div className="card-deck">

      <Filtre 
       changeMap={this.handelMap.bind(this)} 
       chanheMarker={this.handelMarker.bind(this)}
      />
      <div className="card"> 
      {/* <MapContainer 
      position={this.state.Map}
      popUp={this.state.name}
      zoom={this.state.zoom} /> */}

     <Map 
      type={"google"}
      position={this.state.Map}
      popUp={this.state.name}
      zoom={this.state.zoom}
     />

      {/* <AppOsm/> */}
      </div>  
      </div>
     );
  }
}
 
export default App;

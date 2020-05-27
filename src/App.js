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
    zoom:7,
    visible:false
    }

  handelMap(t){
   // console.log("spéccccccc",t);
    this.setState({Map:{
                   lat: t.Latitude,
		               lng: t.Longitude
                   },
                   name:"",
                   zoom:9,
                   visible:false
   });
  }

  handelMarker(t){
    //console.log(t);
    this.setState({name:t,
                  zoom:12,
                  visible:true})
  }

  handelReset(t){
    // console.log(t);
    this.setState({Map:{lat: 35.77799,
                        lng: 10.8233},
                   zoom:t,
                   visible:false
    })
  }

  render() {
   // console.log(this.state.Map);
    return ( 
      <div className="card-deck">

      <Filtre 
       changeMap={this.handelMap.bind(this)} 
       changeMarker={this.handelMarker.bind(this)}
       changeReset={this.handelReset.bind(this)}
      />
      <div className="card"> 

     <Map 
      type={"google"}
      position={this.state.Map}
      popUp={this.state.name}
      zoom={this.state.zoom}
      visible={this.state.visible}
     />

      </div>  
      </div>
     );
  }
}
 
export default App;

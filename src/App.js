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
    polygon:[],
    name:"",
    zoom:7,
    visibleMarker:false,
    visiblePoly:false
    }

  handelMap(t){
   // console.log("spéccccccc",t);
    this.setState({Map:{
                   lat: t.lat,
		               lng: t.lng
                   },
                   name:"",
                   zoom:9,
                   visibleMarker:false,
                   visiblePoly:false
   });
  }

  handelMarker(t){
    //console.log(t);
    this.setState({name:t,
                  zoom:12,
                  visiblePoly:false,
                  visibleMarker:true})
  }

  handelReset(t){
    // console.log(t);
    this.setState({Map:{lat: 35.77799,
                        lng: 10.8233},
                   zoom:t,
                   visiblePoly:false,
                   visibleMarker:false
    })
  }

  handelPoly(p){
    console.log(p)
    this.setState({
      polygon:p,
      zoom:10,
      visibleMarker:false,
      visiblePoly:true
    })
  }

  render() {
    //console.log(this.state.visiblePoly);
    return ( 
      <div className="card-deck">

      <Filtre 
       
       changeMap={this.handelMap.bind(this)} 
       changeMarker={this.handelMarker.bind(this)}
       changeReset={this.handelReset.bind(this)}
       changePoly={this.handelPoly.bind(this)}
      />
      <div className="card"> 

     <Map 
      type={"google"}
      position={this.state.Map}
      popUp={this.state.name}
      zoom={this.state.zoom}
      visibleMarker={this.state.visibleMarker}
      positionPoly={this.state.polygon}
      visiblePoly={this.state.visiblePoly}
     />

      </div>  
      </div>
     );
  }
}
 
export default App;

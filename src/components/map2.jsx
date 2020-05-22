import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer ,Control} from "react-leaflet";
import "./Map2.css";

class AppOSM extends Component {
  state={
    selectedPlace: {},
    showingInfoWindow: false,  
    place:this.props.position,
    zoom:this.props.zoom
  }
 
  render() { 
    // console.log(this.state.place)
    // console.log(this.state.zoom)
    if(this.state.place !==this.props.position)
    {
      this.setState({place:this.props.position,
                     zoom:this.props.zoom})
    }
    return ( 
      <Map
      center={this.state.place} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> 

        <Marker
            position={this.state.place}
            onClick={(props) => {
              this.setState({
                showingInfoWindow:true,
                selectedPlace: props
              })
            }}
        />

       {this.state.showingInfoWindow && (  
        <Popup
            position={this.state.place}
            visible={this.state.showingInfoWindow}
            onClose={() => {
              this.setState({showingInfoWindow:false})
            }}
        >
            <div>
              <h1>{this.props.popUp}</h1>
              {/* <p>{this.state.activePark.adresse} </p>
              <p>{this.state.activePark.téléphone} </p>
              <p>{this.state.activePark.site_web} </p> */}
              
            </div>
        </Popup>
         )}
      </Map>
     );
  }
}
 
export default AppOSM ;



import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer ,Control,Polygon} from "react-leaflet";
import "./Map2.css";
import Offre from './offre'

class AppOSM extends Component {
  state={
    selectedPlace: {},
    showingInfoWindow: false,  
    place:this.props.position,
    zoom:this.props.zoom
  }
 
  render() { 
    // console.log(this.state.place)
    // console.log(this.props.positionPoly)
    if(this.state.place !==this.props.position)
    {
      this.setState({place:this.props.position,
                     zoom:this.props.zoom})
    }
    var triangleCoords =this.props.positionPoly
    return ( <div className="mapStyles">
      <Map
      center={this.state.place} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> 
       {this.props.visibleMarker && ( 
        <Marker
            position={this.state.place}
            onClick={(props) => {
              this.setState({
                showingInfoWindow:true,
                selectedPlace: props
              })
            }}
        />
        )}
        {this.props.visiblePoly && (
        <Polygon
        positions={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
           />
        )}

       {this.state.showingInfoWindow && (  
        <Popup
            position={this.state.place}
            onClose={() => {
              this.setState({showingInfoWindow:false})
            }}
        >
            <div>
              <h1>{this.props.popUp.name}</h1>
              <Offre 
               offre={this.props.popUp.offre}
            />
              
            </div>
        </Popup>
         )}
      </Map>
      </div>
     );
  }
}
 
export default AppOSM ;



import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {InfoWindow, Marker,Polygon } from 'google-maps-react';
import Offre from './offre'

const mapStyles = {
  width: '100%',
  height: '95vh',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {},
    place:this.props.position,
    zoom:this.props.zoom,
  };
  onMarkerClick = (props, marker, e) =>
 { //console.log(props);
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });}
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null

      }); 
    }

  };

  


  render() {
   
  // console.log(this.state.place)

  if(this.state.place !==this.props.position)
  {
    this.setState({place:this.props.position,
                   zoom:this.props.zoom})
  }
  var triangleCoords =this.props.positionPoly
    return (
     
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        style={mapStyles}
        initialCenter={this.state.place}
        center={this.state.place}
      >

      {this.props.visiblePoly && (<Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
           />)}

        <Marker 
               onClick={this.onMarkerClick}
               name={this.props.popUp.name}
               position={this.state.place}
               visible={this.props.visibleMarker}
               icon={{
                url: window.icon,
                scaledSize: { width: 40, height: 40 }
              }}
					/>
						
         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >

         {this.props.visibleMarker&& <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <Offre 
               offre={this.props.popUp.offre}
            />
          </div>}
        </InfoWindow>
      </Map>
    );
    //'AIzaSyBWTRixOORXDjHIsYpAHi0STk6LXXGrUbM'
  }
}

export default GoogleApiWrapper({
  apiKey: window.key
})(MapContainer);
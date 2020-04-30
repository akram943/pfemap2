import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100vh',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {},
    place:{ lat: 35.77799,
      lng: 10.8233}         
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
  //  this.setState({place: this.props.position})
    return (
     
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={this.state.place}
      >
        
        <Marker
          onClick={this.onMarkerClick}
          name={'Monastir'}
        />
         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWTRixOORXDjHIsYpAHi0STk6LXXGrUbM'
})(MapContainer);
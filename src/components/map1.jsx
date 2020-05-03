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
    place:this.props.position
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

  // componentDidMount(){
    
  //   if(!this.props.position)
  //   {this.setState({place: this.props.position})}
  //   else{this.setState({place: this.props.position})}
  // }

  


  render() {
  // console.log(this.props.position)
  // console.log(this.state.place)
  if(this.state.place !==this.props.position)
  {
    this.setState({place:this.props.position})
    
  }
    return (
     
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={this.state.place}
        center={this.state.place}
      >
        <Marker 
               onClick={this.onMarkerClick}
						   name={'Dolores park'}
						   position={this.state.place}
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
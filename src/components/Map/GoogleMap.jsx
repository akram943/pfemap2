import React, { Component } from 'react';
import MapContainer from '../map1'

export default class GoogleMap extends Component{
    render(){ 
        return(         
        <MapContainer 
            position={this.props.position}
            popUp={this.props.popUp}
            zoom={this.props.zoom}
            visibleMarker={this.props.visibleMarker} 
            positionPoly={this.props.positionPoly}
            visiblePoly={this.props.visiblePoly}
            />
        )}
}
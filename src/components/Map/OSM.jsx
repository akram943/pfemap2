  
import React, { Component } from 'react';
import AppOsm from '../map2';

export default class OSM extends Component{
    render()
    {return(
        <AppOsm
        position={this.props.position}
        popUp={this.props.popUp}
        zoom={this.props.zoom}
        visibleMarker={this.props.visibleMarker}
            positionPoly={this.props.positionPoly}
            visiblePoly={this.props.visiblePoly}
        />
    )}
}
import React, { Component } from 'react';

class Region extends Component {
    state = {  }

    handleChange(event){
        this.props.changeRegion(event.target.value)
         this.props.changeMap(event.target.value)
    }

    render() { 
        return ( 
            <select className="custom-select mr-sm-2" onChange={this.handleChange.bind(this)}>
                <option defaultValue>Région</option>
               {this.props.data.map(reg =>(
                    <option key={reg.id} id={reg.id} >{reg.name}</option>
                ))}
            </select>
         );
    }
}
 
export default Region;
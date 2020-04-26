import React, { Component } from 'react';

class Specialite extends Component {
    state = {  }

    handleChange(event){
       // console.log("vfvfvf",event.target.value)
        this.props.changeSpecialite(event.target.value)
    }

    render() {
        return ( 
            <select className="custom-select mr-sm-2" onChange={this.handleChange.bind(this)} >
                <option defaultValue>spécialité</option>
                {this.props.data.map(spec =>(
                    <option key={spec.id} >{spec.name}</option>
                ))}
            </select>
         );
    }
}
 
export default Specialite;
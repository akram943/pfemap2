import React, { Component } from 'react';

class Client extends Component {
    state = {  }
    render() { 
        //console.log(this.props.data)
        return ( 
            <div>
                 {this.props.data.map(client =>(
                    <div key={client._id} className="card"> 
                    <nav className="navbar navbar-expand-lg  mx-md-n5">
                      <div className="p-3 border bg-light">
                          <img id="myImg" src={client.image} width="100" height="100"/>
                      </div>
                      <div className="p-3">
                         <label id="txt">{client.name}</label><br/>
                         <label> {client.adresse} </label>
                      </div>
                      <button type="button" className="btn btn-primary ml-auto ">site web</button>
                   </nav>
                   </div>
                ))}
            </div>
         );
    }
}
 
export default Client;
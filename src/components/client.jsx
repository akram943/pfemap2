import React, { Component } from 'react';

class Client extends Component {
    state = {  }

    clickPos(event){
        //console.log(event.target.id)
        this.props.changeMap(event.target.id)
    }

    render() { 
        //console.log(this.props.data)
        return ( 
            <div>
                 {this.props.data.map(client =>(
                    <div key={client._id} className="card" onClick={this.clickPos.bind(this)} > 
                    <nav className="navbar navbar-expand-lg  mx-md-n5" id={client._id}>
                      <div className="p-3 border bg-light">
                          <img id="myImg" src={client.image} width="100" height="100"/>
                      </div>
                      <div className="p-3">
                         <label id="txt">{client.name}</label><br/>
                         <label> {client.adresse} </label>
                      </div>
                      <button type="button" className="btn btn-primary ml-auto mr-1 ">site web</button>
                      <button type="button" className="btn btn-primary  ">site web</button>
                   </nav>
                   </div>
                ))}
            </div>
         );
    }
}
 
export default Client;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal } from "react-bootstrap";

class Client extends Component {
    state = { 
        visible:false,
     }

    clickPos(event){
       // console.log(event.target)
        this.props.changeMap(event.target.id)
    }

    close= () => {
        this.setState({
          visible:false,
        })
      }
      open= (e) => {
        if(e.target.value==="")
       { this.setState({
        visible:true,
      })}
       
      }

    render() { 
        //console.log(this.props.data)
        return ( 
            <div>
                 {this.props.data.map(client =>(
                    <div key={client._id} className="card" onClick={this.clickPos.bind(this)} > 
                    <nav className="navbar navbar-expand-lg  mx-md-n5" id={client._id}>
                      <div className="p-3 border bg-light">
                          <img id={client._id} src={client.image} width="100" height="100"/>
                      </div>
                      <div className="p-3" id={client._id}>
                         <label className="txt" id={client._id}>{client.name}</label><br/>
                         <label id={client._id}> {client.adresse} </label>
                      </div>
                      <a href={client.site_web} target="_blank" >
                      <button type="button" onClick={this.open.bind(this)} className="btn btn-primary ml-auto mr-1 " value={client.site_web} id={client._id}>site web</button>
                      </a>
                      <button type="button" className="btn btn-primary" id={client._id}>itineraire</button>

                  
                   </nav>
                   </div>
                ))}
                    <Modal show={this.state.visible} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>More informations </Modal.Title>
        </Modal.Header>
        <Modal.Body>informations</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.close}>
            Close
          </Button>
          
          
        </Modal.Footer>
      </Modal>
            </div>
         );
    }
}
 
export default Client;
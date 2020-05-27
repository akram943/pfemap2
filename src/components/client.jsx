import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal } from "react-bootstrap";

class Client extends Component {
    state = { 
        visible:false,
        name:"",
        adresse:"",
        téléphone:"",
        siteWeb:""
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
        //console.log(e.target.id)
        const client = this.props.data.filter(c=>c._id ==e.target.id);
        console.log(client[0])
        this.setState({
        visible:true,
        name:client[0].name,
        adresse:client[0].adresse,
        téléphone:client[0].téléphone,
        siteWeb:client[0].site_web,
      })
       
      }

      handelAlert(){
        alert('cet emplacement ne contient pas un site web!');
    
      }

    render() { 
        //console.log(this.props.data)
        return ( 
            <div>
                 {this.props.data.map(client =>(
                    <div key={client._id} className="card" onClick={this.clickPos.bind(this)} > 
                    <nav className="navbar navbar-expand-lg  mx-md-n5" id={client._id}>
                      <div className="p-3 border bg-light" id={client._id}>
                          <img id={client._id} src={client.image} width="100" height="100"/>
                      </div>
                      <div className="p-3" id={client._id}>
                         <label className="txt" id={client._id}>{client.name}</label><br/>
                         <label id={client._id}> {client.adresse} </label>
                      </div>

                      <button type="button" onClick={this.open.bind(this)} className="btn btn-primary ml-auto mr-1 " value={client.site_web} id={client._id}>More info</button>
                      <button type="button" className="btn btn-primary" id={client._id}>itineraire</button>

                  
                   </nav>
                   </div>
                ))}
                    <Modal show={this.state.visible} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                 <p>{this.state.adresse}</p>
                 <p>{this.state.téléphone}</p>
        </Modal.Body>
        <Modal.Footer>
          
      {this.state.siteWeb
      ? <a href={this.state.siteWeb} target="_blank" >
        <Button variant="outline-primary">
        web site
          </Button>
          </a>
        : <Button variant="outline-primary" onClick={this.handelAlert.bind()}>web site</Button> 
        }
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
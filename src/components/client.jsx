import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal } from "react-bootstrap";

class Client extends Component {
    state = { 
        visible:false,
        name:"",
        adresse:"",
        téléphone:"",
        siteWeb:"",
        category:"",
        image:"",
        wifi:"",
        parking:"",
        fumeur:""
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
       // console.log(client[0].option)
        this.setState({
        visible:true,
        name:client[0].name,
        adresse:client[0].adresse,
        téléphone:client[0].téléphone,
        siteWeb:client[0].site_web,
        category:client[0].category,
        image:client[0].image2,
        wifi:client[0].option.wifi,
        parking:client[0].option.parking,
        fumeur:client[0].option.fumeur
      })
       
      }

      handelAlert(){
        alert('cet emplacement ne contient pas un site web!');
    
      }

    render() { 
       // console.log(this.props.data)
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
          <Modal.Title>
          {/* <img className="mr-3 bd-highlight" src={this.state.image} width="70" height="70"/> */}
            {this.state.name}
             </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                 <div className="d-flex bd-highlight mb-3">
                 <div className="mr-auto p-2 bd-highlight">
                      <h6>{this.state.category}</h6>
                      <p>{this.state.adresse}</p>
                      {this.state.téléphone}
                  </div>
                  <div class="p-2 bd-highlight">
                 {this.state.wifi=="true"
                  ?  <img className="bd-highlight" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/09-512.png" width="45" height="40"/>
                  :<img className="bd-highlight" src="https://cdn0.iconfinder.com/data/icons/device-22/24/wifi-off-512.png" width="30" height="30"/>
                  }
                  </div>
                  <div class="p-2 bd-highlight">
                  {this.state.fumeur=="true"
                  ? <img className="ml-auto" src="https://thumbs.dreamstime.com/z/signe-de-zone-fumeur-3315668.jpg" width="45" height="45"/>
                  : <img className="ml-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/No_smoking_symbol.svg/1200px-No_smoking_symbol.svg.png" width="50" height="35"/>
                }
                  </div>
                  <div class="p-2 bd-highlight">
                  {this.state.parking=="true"
                  ? <img className="ml-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaW-tfsCIi3lHuiuXDV3QQP-qgBwyj4eGBpSy4A8X-AXCYGp8X&usqp=CAU" width="50" height="35"/>
                  : <img className="ml-auto" src="https://cdn3.iconfinder.com/data/icons/road-sing/512/Forbidden_no_park_sing_no_parking_sign_road_sign-512.png" width="50" height="35"/>
                }
                  </div>
                 </div>
                 <img className="ml-auto" src={this.state.image} width="300" height="100"/>
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
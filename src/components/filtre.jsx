import React, { Component } from 'react';
import Region from './region';
import Specialite from './specialite';
import Client from './client';
import axios from 'axios'

class Filtre extends Component {
    state = { 
        specialData : [],
        regionData: [],
        clientData: [],
        filter: []
     }

    componentDidMount(){
        // console.log(1)
        axios.get('https://raw.githubusercontent.com/akram943/json-formatter/master/goe1.7.5')   
        .then(res=>{
         // console.log(res.data);
          this.setState({
            specialData: res.data.spécialité,
            regionData: res.data.region,
            clientData: res.data.client,
            filter:res.data.client,
          })
        }) 
      }

    handelSpecialite(t){
     // console.log("spéccccccc",t);
      const client=this.state.clientData.filter(c=>c.category ===t )
      this.setState({filter: client})
    }

    handelRegion(t){
    //  console.log("spéccccccc",t);
      const client=this.state.clientData.filter(c=>c.region ===t )
      this.setState({filter: client})
    }

    handelReset(){
      const cl=this.state.clientData
      this.setState({filter: cl});
    }

    render() {
         // console.log(this.state.clientData)
        return ( 
            <div className="card">
               <nav className="navbar navbar-expand-lg">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                   <Specialite data={this.state.specialData} changeSpecialite={this.handelSpecialite.bind(this)} />
                  <Region data={this.state.regionData} changeRegion={this.handelRegion.bind(this)} />
               </nav>
               <button className="btn btn-outline-primary" onClick={this.handelReset.bind(this)} >Reset</button>
                 <Client data={this.state.filter} filter={this.state.filter}/>
            </div> 
        );
    }
}
 
export default Filtre;
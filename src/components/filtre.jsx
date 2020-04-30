import React, { Component } from 'react';
import Region from './region';
import Specialite from './specialite';
import Client from './client';
import axios from 'axios'
import Search from './search';

class Filtre extends Component {
    state = { 
        specialData : [],
        regionData: [],
        clientData: [],
        filter: [],
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

    handelSearch(t){
      const search=t.toLowerCase()
      const client=this.state.clientData.filter(c=>c.name.toLowerCase().indexOf(search)!==-1)
      this.setState({filter: client})
    }

    handelMap(t){
      const client=this.state.regionData.filter(c=>c.name ===t )
      this.props.changeMap(client[0].coordinates);
    }

    render() {
         // console.log(this.state.clientData)
        return ( 
            <div className="card">
               <nav className="navbar navbar-expand-lg">
                  <Search 
                     changeSearch={this.handelSearch.bind(this)}
                  />
                  <Specialite 
                     data={this.state.specialData} 
                     changeSpecialite={this.handelSpecialite.bind(this)}
                  />
                  <Region 
                     data={this.state.regionData} 
                     changeRegion={this.handelRegion.bind(this)} 
                     changeMap={this.handelMap.bind(this)}
                  />
               </nav>
               <button className="btn btn-outline-primary ml-3 mr-3" onClick={this.handelReset.bind(this)} >Reset</button>
                 <Client data={this.state.filter} filter={this.state.filter}/>
            </div> 
        );
    }
}
 
export default Filtre;
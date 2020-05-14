import React, { Component } from 'react';
import Client from './client';
import axios from 'axios'
import NavBar from './navBar';

class Filtre extends Component {
    state = { 
        specialData : [],
        regionData: [],
        clientData: [],
        filter: [],
        reset:""
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
      this.setState({filter: cl,
                     reset:"Région"});
      
    }

    handelSearch(t){
      const search=t.toLowerCase()
      const client=this.state.clientData.filter(c=>c.name.toLowerCase().indexOf(search)!==-1)
      this.setState({filter: client})
    }

    handelMap(t){
      const region=this.state.regionData.filter(c=>c.name ===t )
      this.props.changeMap(region[0].coordinates);
    }

    handelMap1(t){
       const client=this.state.clientData.filter(c=>c._id ==t)
       this.props.changeMap(client[0].coordinates);
       this.props.chanheMarker(client[0].name);
    }

    render() {
         // console.log(this.state.clientData)
        return ( 
            <div className="card">
             
               {/* <button className="btn btn-outline-primary ml-3 mr-3" onClick={this.handelReset.bind(this)} >Reset</button> */}
               <NavBar changeSearch={this.handelSearch.bind(this)}
                        dataSpec={this.state.specialData} 
                        changeSpecialite={this.handelSpecialite.bind(this)}
                        dataReg={this.state.regionData} 
                        changeRegion={this.handelRegion.bind(this)} 
                        changeMap={this.handelMap.bind(this)}
                        changeReset={this.handelReset.bind(this)}
                        reset={this.state.reset}
                />
                 <Client 
                 data={this.state.filter} 
                 filter={this.state.filter}
                 changeMap={this.handelMap1.bind(this)}
                 />
            </div> 
        );
    }
}
 
export default Filtre;
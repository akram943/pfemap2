import React, { Component } from 'react';
import Emplacement from './emplacement';
import axios from 'axios'
import NavBar from './navBar';
import ReactScrollbar from 'react-scrollbar';

class Filtre extends Component {
    state = { 
        specialData : [],
        regionData: [],
        clientData: [],
        filter: [],
        reset:"",
        map:""
     }

    componentDidMount(){
      console.log (window.url);
     // 'https://raw.githubusercontent.com/akram943/json-formatter/master/goe1.7.5'
        axios.get(window.url)   
        .then(res=>{
         // console.log(res.data);
          this.setState({
            specialData: res.data.spécialité,
            regionData: res.data.region,
            clientData: res.data.emplacement,
            filter:res.data.emplacement,
            map:res.data.map
          });
         // this.props.mapType(res.data.map);
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
      this.props.changeReset(7);
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
       //console.log(client[0])
       if(client[0].geometry.type==="Point")
       {
       // console.log(client[0].geometry.coordinates[0])
        this.props.changeMap(client[0].geometry.coordinates[0]);
        this.props.changeMarker(client[0]);
       }
       else{
        //console.log(client[0].geometry.coordinates[0])
        this.props.changeMap(client[0].geometry.coordinates[0]);
        this.props.changePoly(client[0].geometry.coordinates)
       }
    }

    render() {
         // console.log(this.state.clientData)
         const myScrollbar = {
          width: 700,
          height: 600,
        };
        return ( 
          <ReactScrollbar style={myScrollbar}>
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
                 <Emplacement 
                 data={this.state.filter} 
                 filter={this.state.filter}
                 changeMap={this.handelMap1.bind(this)}
                 />
            </div> 
            </ReactScrollbar>
        );
    }
}
 
export default Filtre;
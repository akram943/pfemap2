import React, { Component } from 'react';

class NavBar extends Component {
    state = {
        valueReg:"",
        valueSpec:""
      }


    upDateSearch(event){
        this.props.changeSearch(event.target.value.substr(0,20));
    }

    handleChangeSpec(event){
        this.setState({valueSpec:event.target.value})
         this.props.changeSpecialite(event.target.value)
     }

     handleChange(event){
        this.setState({valueReg:event.target.value})
        if(event.target.value !="Région")
       {this.props.changeRegion(event.target.value)
        this.props.changeMap(event.target.value)
        // this.setState({reset:""})
        }
    }

    handelReset(event){
       this.props.changeReset()
       this.setState({valueReg:"Région",
                      valueSpec:"spécialité"})
      // console.log(this.state.valueReg)
      }

    render() { 
        return ( 
            <div>
            <div>
            <nav className="navbar navbar-expand-lg">
            <input 
               className="form-control" 
               type="search" 
               placeholder="Search" 
               onChange={this.upDateSearch.bind(this)} 
            />
            <select className="custom-select ml-1" value={this.state.valueSpec} onChange={this.handleChangeSpec.bind(this)} >
                <option defaultValue>spécialité</option>
                {this.props.dataSpec.map(spec =>(
                    <option key={spec.id} >{spec.name}</option>
                ))}
            </select>
            <select className="custom-select mr-sm-2" value={this.state.valueReg} onChange={this.handleChange.bind(this)}>
                <option>Région</option>
               {this.props.dataReg.map(reg =>(
                    <option key={reg.id} id={reg.id} >{reg.name}</option>
                ))}
            </select>
            </nav>
            </div>
            <div>
              <button className="btn btn-outline-primary btn-block " onClick={this.handelReset.bind(this)} >Reset</button>
              </div>
              </div>
         );
    }
}
 
export default NavBar;
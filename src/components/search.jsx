import React, { Component } from 'react';

class Search extends Component {
    state = {  }

    upDateSearch(event){
        this.props.changeSearch(event.target.value.substr(0,20));
    }

    render() { 
        return ( 
             <div>
            <input 
               className="form-control mr-5" 
               type="search" 
               placeholder="Search" 
               onChange={this.upDateSearch.bind(this)} 
            />
            </div>
         );
    }
}
 
export default Search;
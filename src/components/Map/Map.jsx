import React , {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMap from "./GoogleMap";
import OSM from "./OSM";

class Map extends Component{


    state ={
        type:"",
        items:[],
        data: [],
    };
    componentDidMount(){
        this.initData();
    }

    initData = ()=>{
        this.setState(
        {
        type:this.props.type,
        items:this.props.items,
        data:this.props.data,
    }
    )}
    renderMap = ()=>{
switch(this.state.type){
    case "google":
        return(<GoogleMap 
            position={this.props.position}
            popUp={this.props.popUp}
            zoom={this.props.zoom}
            visible={this.props.visible}
            />
            );

        break;

    case "OSM":
        return(<OSM
            position={this.props.position}
            popUp={this.props.popUp}
            zoom={this.props.zoom}
        />
            );

        break;
    

}

        if(this.state.type==="google"){
            return(<GoogleMap/>)
        }
    }
    renderOSMap =()=>{
        if(this.state.type==="OS"){
            return(<OSM/>)
        }
    }



render(){
return(<p>
    {this.renderMap()}
    </p>)
}  
}
Map.propTypes = {
    type : PropTypes.string,
    items : PropTypes.array,
    data : PropTypes.array,

};

Map.defaultProps = {
    type : "google",
    items:[],
    data:[],
};
export default Map;
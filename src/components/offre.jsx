import React, { Component } from 'react';

class Offre extends Component {
    state = { 
        valeur:this.props.offre.valeur,
        description:this.props.offre.discription,
        debut:this.props.offre.debut,
        fin:this.props.offre.fin
     }
    render() { 
        //console.log(this.props.offre);
        return ( 
            <p>
            {this.state.valeur&&
           (<div>
            <img className="ml-auto" src="https://www.nicepng.com/png/detail/191-1911983_back-label-promo.png" width="70" height="45"/>
            <h4>une promotion jusqu'à -{this.state.valeur}%</h4>
            <h6>{this.state.description}</h6>
            Date de début:{this.state.debut}<br/>
            Date de fin:{this.state.fin}
            </div>
           )
            }
            </p>
         );
    }
}
 
export default Offre;
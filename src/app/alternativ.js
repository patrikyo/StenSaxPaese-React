import React,{Component} from "react";

class Alternativ extends Component{
	render(){
		return(
      			<div id ={this.props.namn} className="sida" >
      				<img src={this.props.bild} alt={this.props.namn} onClick= {this.vald.bind(this)} />
      			</div>
		);
	}
	vald(){
		this.props.raekna(this.props.namn);
	}
}

export default Alternativ;
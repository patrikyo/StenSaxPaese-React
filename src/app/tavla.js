import React,{Component} from "react";

class Tavla extends Component{

	render(){
		return(
			<div>
				<p className="anvendare">Dina poäng</p>
				      <div className="res">{this.props.dinaPoaeng}:{this.props.pcPoaeng}</div>
				<p className="motstoendare">Datorns poäng</p>
			</div>
		);
	}


}

export default Tavla;
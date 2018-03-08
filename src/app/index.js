import React, {Component} from "react";
import ReactDOM from "react-dom";
import  Alternativ from "./alternativ";
import Tavla from "./tavla";
require("./css/design.css");

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			pcPoaeng: 0,
			dinaPoaeng: 0,
		}
	}

	raekna(typ){
		var alt = ["sten","sax", "påse"];
		var pcAlt = Math.floor(Math.random() * Math.floor(alt.length));
		if(typ === alt[pcAlt]){
			this.setState({pcPoaeng: this.state.pcPoaeng + 1 ,dinaPoaeng: this.state.dinaPoaeng + 1 });
		}else if(typ === "sten" && alt[pcAlt] === "sax"){
				this.setState({dinaPoaeng: this.state.dinaPoaeng + 1});
		}else if(typ === "sten" && alt[pcAlt] === "pase"){
				this.setState({dinaPoaeng: this.state.pcPoaeng + 1});
		}else if(typ === "sax" && alt[pcAlt] === "pase"){
				this.setState({dinaPoaeng: this.state.dinaPoaeng + 1});
		}else if(typ === "sax" && alt[pcAlt] === "sten"){
				this.setState({dinaPoaeng: this.state.pcPoaeng + 1});
		}else if(typ === "påse" && alt[pcAlt] === "sten"){
				this.setState({dinaPoaeng: this.state.dinaPoaeng + 1});
		}else{
			this.setState({dinaPoaeng: this.state.pcPoaeng + 1});
		}
	}
	render(){
		return(		
			<div>
				<header>
					<h1> sten sax påse</h1>
				</header>
				<div className="resultatTavla">
					<Tavla pcPoaeng = {this.state.pcPoaeng} dinaPoaeng = {this.state.dinaPoaeng}/>
				</div>
				<div className="spelAlternativKontainer">
					<Alternativ namn= "sten" bild = "https://drive.google.com/uc?id=1DGOBkvE2o2lZyuKn-KjG4esQYN1SwVwc" raekna = {this.raekna.bind(this)} />
					<Alternativ namn= "sax" bild = "https://drive.google.com/uc?id=1srcFw7D9djwr2K17IPXUOZFeI4SK81hm" raekna = {this.raekna.bind(this)} />
					<Alternativ namn= "påse" bild = "https://drive.google.com/uc?id=1DhnE-DZ5mrnsxiI2xE4-dfuRbM74qYla" raekna = {this.raekna.bind(this)} />
				</div>	
			</div>

		);
	}
}

ReactDOM.render(<App / >, document.getElementById("App"));
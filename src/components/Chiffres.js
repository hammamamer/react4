import React, {Component} from 'react';



class Chiffre extends Component{
	
    render(){
    	const chiffre=
    	{
    		color:'white',
    		height:50,
    		width:200
    	}
	return(
		
		<div>
		   <h1 style={chiffre}>{this.props.chiffre}</h1>
		   <p style={chiffre}>{this.props.descrip}</p>
		</div>
		

		);
}
}
export default Chiffre;

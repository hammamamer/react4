import React, {Component} from 'react';

class Hackerspace extends Component{
	
    render(){
    	const img={
			height:250,
			width:300
		}
		const place=
		{
			textAlign:'center'
		}
		const flex =
		{
			display:'flex',
			justifyContent:'space-between'
		}
	return(
		
		<div>
		<div style={flex} className='Hackerspace'>
			
             <div> 
                 <img style={img} src={this.props.img}/><br/>
                 <h2 style={place}>{this.props.place}</h2>
               </div>
		</div>
		</div>
		

		);
}
}
export default Hackerspace;

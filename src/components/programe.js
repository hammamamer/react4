import React, {Component} from 'react';

class Programe extends Component{
	
    render(){
    	const prog={
    		color:'white',
    		textAlign:'center',
    		border:'Groove white',
    		borderRadius:20
    	}
    	const descrip=
    	{
    		height:190,
    		width:250,
            textAlign:'center'
    	}
    	const button=
    	{
    		border:'none',
    		backgroundColor:'white',
    		color:'black',
    		padding:5,
    		borderRadius:20,
    		marginLeft:70
    	}

	return(
		
		<div>
		<div className='Programe'>
			
             <div> 
               <h4 style={prog}>{this.props.prog}</h4>
               <p style={descrip}>{this.props.descrip}</p>
              
               
               <button style={button}>En savoir plus</button>
               </div>
		</div>
		</div>
		

		);
}
}
export default Programe;

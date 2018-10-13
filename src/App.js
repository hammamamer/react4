import React, { Component } from 'react';

import sousse from './sousse.jpg'
import tunis from './tunis.jpg'
import sfax from './sfax.jpg'


import './App.css';
import Programe from './components/programe.js'
import Chiffre from './components/Chiffres.js'
import Hackerspace from './components/hackerspace.js'

class App extends Component {
  render() {
    const element1 =
    {
          height:300,
          width:270,
          backgroundColor:'red',
          padding:10
    }
    const element2 =
    {
          height:300,
          width:270,
          backgroundColor:'blue',
          padding:10
    }
    const element3 =
    {
          height:300,
          width:270,
          backgroundColor:'brown',
          padding:10
    }
    const element4 =
    {
          height:300,
          width:270,
          backgroundColor:'skyblue',
          padding:10
    }
    const flex =
    {
      display :'flex',
      justifyContent:'space-between'

    }
   return( 
<div>
       <h1>NOS PROGRAM</h1>
       <div className="background">
       <div style={{display:'flex',justifyContent:'center'}} className="Programe">
       <div  style={element1} className="element">
       <Programe  className="element" prog="FULL TIME PROGRAM" descrip="Le Full Time Coding est un programme intensif de 3 mois pour 
       devenir développeurweb fullstack sur les technologies Javascript 
       (React JS, Angular JS, Node JS, MongoDB...).Les technologies Javascript sont des technologies 
       développés par Google et Facebook." />
       </div>
       <div style={element2} className="element">
       <Programe className="element" prog="PART TIME PROGRAM" descrip="Le Part time Coding est un programme qui se déroule sur 3 mois 
       à raison d'une demi-journée par semaine pendant le weekend (Samedi après-midi ou Dimanche après-midi) . 
       Il s'adresse à tous ceux qui souhaitent créer leur propre produit technologique. " />
       </div>

       <div style={element3} className="element">
       <Programe prog="SUMMER ACADEMY" descrip="Le Summer Academy est un programme de 3 semaines 
       pendant l'été. Il s'adresse à tous ceux qui souhaitent créer leur propre produit technologique.
       Le programme comporte 4 parcours selon le produit technologique que l'étudiant veut créer.
    "/>
        </div>
         <div style={element4} className="element">
        <Programe prog="KIDS CODING PROGRAM" descrip="Le Kids Coding est un programme qui se déroule 
        tout au long de l'année scolaire (De Octobre à Mai) tous les Dimanches matin.
        Ce programme comporte 4 niveaux. Un niveau dure 2 mois. 
        La complétion d'une session de deux mois permet de passer au niveau suivant. 
        " />
        
        </div>
        </div>
<div>
        <h1  style ={{color:"white"}}className="h1Chiffre">QUELQUE CHIFFRES</h1></div>
        <div style={flex} className="ChiffreContainer">
        
          <div className="chiffre">
            <Chiffre chiffre='+20.000' descrip="PASSIONES AU DIGITAL" />
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='+500' descrip='ETUDIANTS DEPUIT LE DEMARAGE EN AOUT 2016'/>
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='+300' descrip='PRODUITS DEVOLPPES'/>
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='+50' descrip='SPEAKERS'/>
          </div>
          <div className='chiffre'>
            <Chiffre chiffre='400m²' descrip='HACKER SPACE AU COEUR DU LAC 1'/>
          </div>
        </div>
        <br/>
        </div>
        <h1 align="center"> Ou se passe les session</h1>
        <p align="center">Les sessions se passe dans les hackerspace de GoMyCode dans les villes suivantes</p>
        <div style={flex} className="hackerspace">
          <div>
            <Hackerspace img={sousse} place="sousse" />
          </div>
          <div>
            <Hackerspace img={tunis} place="Tunis" />
          </div>
          <div>
            <Hackerspace img={sfax} place="Sfax" />
          </div>
        </div>

</div>
    

);

  }
}

export default App;

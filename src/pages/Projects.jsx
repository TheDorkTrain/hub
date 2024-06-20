import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


import Auth from '../utils/auths';

const Projects = () => {

  const [ secondary, setSecondary ] = useState('')

  const stateChange = function(e) {
    setSecondary(e.target.textContent.toLowerCase())
  }

  const defaultDisplay = function(){
    return (<div className="box" style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '500px', width: '70%', border: 'var(--border)', 
      backgroundColor: 'var(--sub-color'}}>
  <figure style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100%'}}>
    <img style={{ border: 'var(--border)',height: '100%', width: '70%'}} src="src\assets\images\vault.jpg"/>  
  </figure>
  <div  style={{width: '80%', alignItems: 'center', justifyContent: 'center',}}>
        <h2> Adventurer Vault</h2>
        <Link style={{color:'var(--main-color)'}}to="https://github.com/TheDorkTrain/Adventurer-Vault"> GitHub Link</Link>
         <p style={{textAlign: 'left'}}>Adventurer Vault is a Tabletop Role Playing Game(5e compatible) character storage application that allows users to store their sheets, magic items, feats, and create journal entries based off their characters previous campaigns or sessions.</p>
         <p style={{textAlign: 'left'}}>Users can also access a database of entered characters and see their magic items, journal entries, etc.</p>
         </div>
      </div>)
  }

  const subDisplay = function(lineItem) {
    switch (secondary) {
      case 'adventurer vault':
        return (<div className="box" style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '500px', width: '70%', border: 'var(--border)', 
        backgroundColor: 'var(--sub-color'}}>
    <figure style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100%'}}>
      <img style={{ border: 'var(--border)',height: '100%', width: '70%'}} src="src\assets\images\vault.jpg"/>  
    </figure>
    <div  style={{width: '80%', alignItems: 'center', justifyContent: 'center',}}>
          <h2> Adventurer Vault</h2>
          <Link style={{color:'var(--main-color)'}}to="https://github.com/TheDorkTrain/Adventurer-Vault"> GitHub Link</Link>
           <p style={{textAlign: 'left'}}>Adventurer Vault is a Tabletop Role Playing Game(5e compatible) character storage application that allows users to store their sheets, magic items, feats, and create journal entries based off their characters previous campaigns or sessions.</p>
           <p style={{textAlign: 'left'}}>Users can also access a database of entered characters and see their magic items, journal entries, etc.</p>
           </div>
        </div>)
      case 'true beast':
        return (<div className="box" style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '500px', width: '70%', border: 'var(--border)', 
          backgroundColor: 'var(--sub-color'}}>
      <figure style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100%'}}>
        <img style={{ border: 'var(--border)',height: '100%', width: '70%'}} src="src\assets\images\beast.jpg"/>  
      </figure>
      <div  style={{width: '80%', alignItems: 'center', justifyContent: 'center',}}>
            <h2> True Beast</h2>
            <Link style={{color:'var(--main-color)'}}to="https://github.com/TheDorkTrain/TrueBeast"> GitHub Link</Link>
             <p style={{textAlign: 'left'}}>True Beast is a discord compatible app that users can activate via chat commands to automate an non player character turn in an tabletop rpg. They can set up the monsters/npcs they want to group up and set their random targets as well. </p>
             </div>
          </div>)
      case 'meteor match':
          return (<div className="box" style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '500px', width: '70%', border: 'var(--border)', 
            backgroundColor: 'var(--sub-color'}}>
        <figure style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100%'}}>
          <img style={{ border: 'var(--border)',height: '100%', width: '70%'}} src="src\assets\images\match.png"/>  
        </figure>
        <div  style={{width: '80%', alignItems: 'center', justifyContent: 'center',}}>
              <h2> Meteor Match</h2>
              <Link style={{color:'var(--main-color)'}}to="https://github.com/TheDorkTrain/MeteorMatch"> GitHub Link</Link>
               <p style={{textAlign: 'left'}}>This application was an experiment in AI api calls. With Meteor Match, users are paired with an AI who is guided based on selectable interests and preferences the user selects. The user can interact in real time with the AI by using the chat box.</p>
               </div>
            </div>)
      case 'logogen':
        return (<div className="box" style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '500px', width: '70%', border: 'var(--border)', 
          backgroundColor: 'var(--sub-color'}}>
      <figure style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100%'}}>
        <img style={{ border: 'var(--border)',height: '100%', width: '70%'}} src="src\assets\images\logo.png"/>  
      </figure>
      <div  style={{width: '80%', alignItems: 'center', justifyContent: 'center',}}>
            <h2> LogoGen</h2>
            <Link style={{color:'var(--main-color)'}}to="https://github.com/TheDorkTrain/logoGen"> GitHub Link</Link>
             <p style={{textAlign: 'left'}}>This node.js program can be used to generate small .svg logos. It is very simple to use and can create a variety of simple logos.</p>
             </div>
          </div>)
      case 'podcast website':
        return (<div className="box" style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '500px', width: '70%', border: 'var(--border)', 
          backgroundColor: 'var(--sub-color'}}>
      <figure style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', width: '100%'}}>
        <img style={{ border: 'var(--border)',height: '100%', width: '70%'}} src="src\assets\images\podcast.jpg"/>  
      </figure>
      <div  style={{width: '80%', alignItems: 'center', justifyContent: 'center',}}>
            <h2> Podcast Website</h2>
            <Link style={{color:'var(--main-color)'}}to="https://github.com/lazybeast904/Chismosa-s-podcast"> GitHub Link</Link>
             <p style={{textAlign: 'left'}}>This site was designed as a supplement to the podcast Las Chismosas and gathers user submissions from listeners to send privately to the podcast owners.</p>
             </div>
          </div>)
      default:
        return defaultDisplay()
    }
  }

  
  return (
    <><div style={{display: "flex", justifyContent: 'space-around', height:'500px', marginTop: '30px'}}>
      <nav  style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', border: 'var(--border)', backgroundColor: "var(--main-color)", width:'15%'}}>
        <h2 style={{backgroundColor: 'var(--main-dark)', color: 'var(--main-light)', padding: '10px', width: '100%'}}> Projects</h2>
      <button className="projButt" onClick={stateChange}>Adventurer Vault</button>
    <button className="projButt" onClick={stateChange}>True Beast</button>
    <button className="projButt" onClick={stateChange}>Meteor Match</button>
    <button className="projButt" onClick={stateChange}>LogoGen</button>
    <button className="projButt" onClick={stateChange}>Podcast Website</button>
    </nav> 
  
          { subDisplay() || defaultDisplay()}

      </div>

     
    </>
  );
}

export default Projects;

import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Header() {

  return (
    <> 
     <header>
      <div style={{background: 'var(--sub-color2)', paddingRight: '30px'}}>
        <h1> Bryce McWhirter</h1>
          <h2 id="subtitle"> developer / tech support</h2>
      </div>
      <nav id="headnav">
          <ul id="nav">
             <li > <Link to="/">About Me</Link></li>
             <li class="projects" ><Link to="/projects">Projects</Link></li>
         </ul>
      </nav>
        </header>
    
  
    </>
  )
}

export default Header

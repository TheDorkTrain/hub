import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


import Auth from '../utils/auths';

const Home = () => {
  
  return (

    <section style={{display: 'flex', gap: '10px'}} >
<figure style={{ width: '50%'}}>
    <img className="headshot" src="src\assets\images\Me.jpg" style={{width: '400px'}}/>  
</figure>
<div className="tech">
<div id="banner" style={{height: "20%"}}>
    <p id="desc">
        Bryce McWhirter is developer / ttrpg writer with a background in Tech Support as a Quality Assurance Supervisor for over 7 Years. He has coded a variety of projects and currently lives in Austin Texas. 
    </p>
    <ul style={{listStyleType: 'none'}}>
        <li> Phone: 512-937-8209</li>
        <li> Email: thedorktrain@gmail.com</li>
        <li> <Link  style={{color: 'var(--main-light)'}} to="https://www.linkedin.com/in/bryce-mcwhirter-1b4b99240/">Click here for my Linkedin Profile </Link> </li>
        <li> <Link  style={{color: 'var(--main-light)'}} to="https://github.com/TheDorkTrain">Click here for my GitHub </Link> </li>
    </ul>
    </div>
    <div className = "resume" style={{display: "flex", gap: '10px' }}>
    <div id="job1" style={{width: "50%"}}>
    <h2 style={{width: "100%"}}> Tech Support</h2>
    <ul style={{width: "100%", paddingTop: '30px', position: 'relative', bottom:'10px'}}> 
        <li>
            Supervised a team of gaming support agents as a Quality Assurance Supervisor.
        </li>
        <li>
            Trained agents over Zendesk, Slack, Confluence, Scorebuddy, Quiq and Sprout.
        </li>
        <li>
            Worked with Support teams around the globe and the client companies directly.
        </li>
        <li>
            Has troubleshooted a variety of platforms including: PC, Mac, Linux, Mobile, Android, Playstation, Xbox, and more
        </li>
    </ul>
    </div>
    <div id="job1" style={{width: "50%"}}>
    <h2 style={{width: "100%"}}> Education</h2>
    <ul style={{width: "100%", paddingTop: '15px', position: 'relative', bottom:'10px'}}> 
    <li>
            University of Texas in Austin
        </li>
        <li>
            Coding Certificate in Full Stack Flex
        </li>
        <li>
            Trained in CSS+, HTML, Javascript
        </li>
        <li>
            Learned and built programs with 
            Mongodb , Express, React, Node
        </li>
    </ul>
    </div>
    </div>
</div>


</section>
  );
}

export default Home;

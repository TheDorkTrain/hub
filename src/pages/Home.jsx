import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


import Auth from '../utils/auths';

const Home = () => {
  
  return (

    <section >
        <div id="banner">
    <p id="desc">
        Bryce McWhirter is developer / ttrpg writer with a background in Tech Support as a Quality Assurance Supervisor for over 5 Years. He lives in Austin Texas and is currently studying coding to shift his career focus.
    </p>
    <ul>
        <li> Phone: 555-555-5555</li>
        <li> Email: thedorktrain@gmail.com</li>
        <li> Linkedin: website </li>
    </ul>
    </div>
    <div className="tech">
<figure>
    <img className="headshot" src="src\assets\images\Me.jpg" style={{width: '300px'}}/>  
</figure>
 <div id="job1">
    <h2> Tech Support</h2>
    <ul> 
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
    <div id="job1">
    <h2> Tech Support</h2>
    <ul> 
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
</div>


</section>
  );
}

export default Home;

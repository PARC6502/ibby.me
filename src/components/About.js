import React from 'react';
import { FaCloudDownload } from 'react-icons/fa';

import ProfilePic from '../assets/images/profilePic.jpg';

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={ProfilePic} alt="" />
      </div>
      <div className="row">
        <div className="four columns">
          <h2>Web Development Skills</h2>
          <ul>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>GatsbyJS</li>
            <li>NextJS</li>
            <li>Wordpress site development</li>
          </ul>
          <h2>IT Skills</h2>
          <ul>
            <li>Linux server setup and basic administration</li>
            <li>Basic docker administration</li>
            <li>Good awareness of the dark web and how to navigate it</li>
            <li>Can write and understand basic programs in Python</li>
            <li>Can write and understand basic programs in Java</li>
            <li>Can write and understand basic programs in Ruby</li>
            <li>Wordpress site development</li>
          </ul>
        </div>

        <div className="four columns">
          <h2>Movement Skills</h2>
          <ul>
            <li>Intermediate pole dancing</li>
            <li>Intermediate swing dancing</li>
            <li>Good understanding of body weight fitness programming and theory</li>
            <li>Basic poi spinning</li>
            <li>Basic juggling</li>
            <li>Basic acrobalance</li>
            <li>Basic yoga</li>
          </ul>
          <h2>Other Skills and Interests</h2>
          <ul>
            <li>Meditation</li>
            <li>Generative art</li>
            <li>Cannabis culture in the UK</li>
            <li>Responsible and/or spiritual use of cannabis</li>
            <li>Well informed about psychedelics</li>
            <li>Fluent Arabic speaker</li>
          </ul>
        </div>
      </div>

      
    </div>
  </section>
);

export default About;

import React from "react";
import "../style/home.css";
import "../style/about.css";
import profile from "../Images/Portrait.png";



function About() {
    return (
      <div>
        <h1 className="Title">Meet The Designer: Sameshnee Moodley</h1>
        <img className="pic" src={profile} alt="Biker with helmet with a heart sign." />
        <p className="Profile">Hey there! </p>
        </div>

        
    );
  }
  
  export default About;
  
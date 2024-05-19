import React from "react";
import "../style/home.css";
import "../style/about.css";
import profile from "../Images/Portrait.png";



function About() {
    return (
      <div>
        <h1 className="Title">Meet The Designer: Sameshnee Moodley</h1>
        <img className="pic" src={profile} alt="Biker with helmet with a heart sign." />
        <p className="Profile">Hey there! I'm Sameshnee, a graphic designer, animator and a bike enthusiast.  </p>
        <p className="Profile"> As the saying goes, "Input makes the design better" (well, something like that), all input is much appreciated so that we can improve and make your experience wayyyyyy better.</p>
        </div>

        
    );
  }
  
  export default About;
  
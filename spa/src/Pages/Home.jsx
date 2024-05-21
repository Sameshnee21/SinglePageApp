import React from "react";
import "../style/home.css";
import image1 from "../Images/1.png";
import image2 from "../Images/2.png";
import image3 from "../Images/3.png";
import image4 from "../Images/4.png";
import image5 from "../Images/5.png";
import image6 from "../Images/6.png";
import image7 from "../Images/7.png";
import image8 from "../Images/8.png";
import image9 from "../Images/9.png";
import image10 from "../Images/10.png";
import image11 from "../Images/11.png";
import image12 from "../Images/12.png";
import image13 from "../Images/13.png";

function Home() {
    return (
      <div >
        <h1 className="Title">Drop a gear and disappear into "The Isle of Man TT"</h1>
        <video src=""></video>

        <p className="P">For over 100 years, the Isle of Man hosts the world's greatest racers to test themselves against the beautiful "Moutain Course". The track stretches for 37.73 miles and uses the island's public roads as part of the race. The Isle of Man TT is not only known to challenge one's skillset but is also considered one of the world's most dangerous sports. With top speeds of 350km/h and different terrains, this sport is truly "a daredevils playground". </p>
        
        <img className="one" src={image1} alt="Partnships with Isle of Man TT." />
        <img className="two" src={image2} alt="Partnships with Isle of Man TT." />
        <img className="three" src={image3} alt="Partnships with Isle of Man TT." />
        <img className="four" src={image4} alt="Partnships with Isle of Man TT." />
        <img className="five" src={image5} alt="Partnships with Isle of Man TT." />
        <img className="six" src={image6} alt="Partnships with Isle of Man TT." />
        <img className="seven" src={image7} alt="Partnships with Isle of Man TT." />
        <img className="eight" src={image8} alt="Partnships with Isle of Man TT." />
        <img className="nine" src={image9} alt="Partnships with Isle of Man TT." />
        <img className="ten" src={image10} alt="Partnships with Isle of Man TT." />
        <img className="eleven" src={image11} alt="Partnships with Isle of Man TT." />
        <img className="twelve" src={image12} alt="Partnships with Isle of Man TT." />
        <img className="thirteen" src={image13} alt="Partnships with Isle of Man TT." />
        </div>
        
    );
  }
  
  export default Home;
  
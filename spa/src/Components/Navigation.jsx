import { Link } from "react-router-dom";
import "./Navbar.css"

function Navigation() {
  return (
    <div className="nav">

      <div className="home">
      <Link to={"/"}>Home</Link>
      </div>

      <div className="links">
      
      <Link to={"/history"}>History</Link>
      <Link to={"/track"}>The Landscape</Link>
      
      <Link to={"/styleguide"}>Styleguide</Link>
      <Link to={"/essay"}>Theory</Link>
      <Link to={"/artwork"}>Artwork</Link>
      <Link to={"/about"}>About</Link>

      </div>

    </div>
    
  );
}

export default Navigation;

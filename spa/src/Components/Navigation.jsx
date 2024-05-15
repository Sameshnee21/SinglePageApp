import { Link } from "react-router-dom";
import "./Navbar.css"

function Navigation() {
  return (
    <div className="nav">

      <div className="home">
      <Link to={"/"}>Logo Here</Link>
      </div>

      <div className="links">
      
      <Link to={"/track"}>The Landscape</Link>
      <Link to={"/history"}>History</Link>
      <Link to={"/styleguide"}>Styleguide</Link>
      <Link to={"/essay"}>Essay</Link>
      <Link to={"/artwork"}>Artwork</Link>

      </div>

    </div>
    
  );
}

export default Navigation;

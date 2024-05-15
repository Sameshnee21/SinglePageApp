import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/track"}>The Landscape</Link>
      <Link to={"/history"}>History</Link>
      <Link to={"/styleguide"}>Styleguide</Link>
      <Link to={"/essay"}>Essay</Link>
      <Link to={"/artwork"}>Artwork</Link>
    </>
  );
}

export default Navigation;

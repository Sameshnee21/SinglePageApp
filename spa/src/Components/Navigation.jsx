import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/contact"}>Contact</Link>
    </>
  );
}

export default Navigation;

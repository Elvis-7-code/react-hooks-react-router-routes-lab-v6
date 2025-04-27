import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar" role="navigation">
      <Navlink to="/">Home</Navlink>
      <Navlink to=""></Navlink>
      <Navlink></Navlink>
    </div>
    );
};

export default NavBar;

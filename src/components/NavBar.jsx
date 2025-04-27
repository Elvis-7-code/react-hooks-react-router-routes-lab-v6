import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar" role="navigation">
      <Navlink to="/">Home</Navlink>
      <Navlink to="/directors">Directors</Navlink>
      <Navlink to="/actors">Actors</Navlink>
    </div>
    );
};

export default NavBar;

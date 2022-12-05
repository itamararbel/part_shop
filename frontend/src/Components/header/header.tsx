import { NavLink } from "react-router-dom";
import "./header.css";

function Header(): JSX.Element {
    return (
        <div className="header">
            <h1>האתר  ההזמנות שלי</h1>
            <NavLink className="links" to="/">customers</NavLink> 
            <NavLink className="links" to="/parts">parts</NavLink> 
            <NavLink  className="links"to="/add new">addCustomer </NavLink> 
        </div>
    );
}

export default Header;

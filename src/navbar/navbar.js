import { Link } from "react-router-dom"
import "./navbar.css"



const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav" style={{ backgroundColor: "red", width: "100%" }}>
                    <li className="nav-item">
                        <Link to={"/"} className="link" > HOME </Link>

                    </li>
                    <li className="nav-item" >
                        <Link to={"/about"} className="link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contacts"} className="link">Contact US</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/settings"} className="link">Settings</Link>
                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default NavbarComponent
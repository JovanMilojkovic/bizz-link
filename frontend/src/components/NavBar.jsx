import { NavLink } from "react-router-dom";
import "./css_files/NavBar.css";

function NavBar() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light bg-dark border-bottom border-bottom-dark"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        BizLink
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav ms-auto px-5">
                            <NavLink className="nav-link" to="/api/v1/signup">
                                Sign up
                            </NavLink>
                            <NavLink className="nav-link" to="/api/v1/login">
                                Login
                            </NavLink>
                            <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex="-1"
                                aria-disabled="true"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

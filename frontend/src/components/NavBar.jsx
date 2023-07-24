import { NavLink } from "react-router-dom";
import "./css_files/NavBar.css";

import { useEffect } from "react";
import useGlobalState from "../globalState";
import { shallow } from "zustand/shallow";

function NavBar() {
    const { isLoggedIn, setIsLoggedIn, setUserToken, setLogInUserData } =
        useGlobalState(
            (selector) => ({
                isLoggedIn: selector.isLoggedIn,
                setIsLoggedIn: selector.setIsLoggedIn,
                setUserToken: selector.setUserToken,
                setLogInUserData: selector.setLogInUserData,
            }),
            shallow
        );

    const handleLogout = () => {
        const token = localStorage.getItem("jwtToken");

        console.log("token deleting: ", token);
        localStorage.removeItem("jwtToken");
        setUserToken(null);
        setIsLoggedIn(false);
        setLogInUserData(null);
    };

    const handleDashboard = async () => {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch("http://localhost:8080/dashboard/", {
            method: "POST",
            //mode: "cors",
            headers: {
                //TODO at the end we need this
                // "X-XSRF-TOKEN": csrfToken,
                "X-Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log(response);
    };

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        setIsLoggedIn(!!token);
    }, []);

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
                            {!isLoggedIn && (
                                <>
                                    <NavLink
                                        className="nav-link"
                                        to="/api/v1/signup"
                                    >
                                        Sign up
                                    </NavLink>
                                    <NavLink
                                        className="nav-link"
                                        to="/api/v1/login"
                                    >
                                        Login
                                    </NavLink>
                                </>
                            )}

                            {isLoggedIn && (
                                <>
                                    <NavLink
                                        to="/dashboard"
                                        className="nav-link"
                                        onClick={handleDashboard}
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </NavLink>
                                </>
                            )}
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

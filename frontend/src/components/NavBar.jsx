import { NavLink } from "react-router-dom";
import "./css_files/NavBar.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalState from "../globalState";
import { shallow } from "zustand/shallow";

function NavBar() {
    const navigate = useNavigate();
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
        localStorage.clear();
        setUserToken(null);
        setIsLoggedIn(false);
        setLogInUserData(null);
    };

    const handleDashboard = async () => {
        const token = localStorage.getItem("jwtToken");
        const username = localStorage.getItem("username").toLowerCase();
        try {
            const response = await fetch(
                `http://localhost:8080/dashboard/?id=${username}`,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 200) {
                navigate(`/dashboard/${username}`);
            } else {
                setIsLoggedIn(false);
                setLogInUserData(null);
                setUserToken(null);
                localStorage.clear();
                navigate("/api/v1/login");
            }
        } catch (error) {
            console.log(error);
        }
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

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import './css_files/NavBar.css';

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/">BizLink</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="navbarLink" to="/">Home</NavLink>
                        <NavLink className="navbarLink" to="/api/v1/signup">Sign up</NavLink>
                        <NavLink className="navbarLink" to="/api/v1/login">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

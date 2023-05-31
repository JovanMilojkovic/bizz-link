import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/">BizLink</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/createUser">Registration</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

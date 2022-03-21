import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./MainNavbar.css";

const MainNavbar = () => (
    <Navbar bg="primary" variant="dark" expand="md">
        <Container>
            <Navbar.Brand>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                    React Pokedex
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">
                        PokeDex
                    </Link>
                    <Link className="nav-link" to="/myteam">
                        MyTeam
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default MainNavbar;

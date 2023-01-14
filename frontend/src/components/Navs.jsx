import {Navbar,NavDropdown,Nav,Container} from "react-bootstrap"
import { NavLink} from "react-router-dom"
import { logo } from "../image"
import "./Navs.css"
import { HOME, JENK, LOGIN, SIGNUP, TROOM } from "../routes"

const Navs = () => {
    return(
        <Navbar className="navlayer fixed-top" expand="lg">
            <Container>
                <Navbar.Brand><NavLink to={HOME}><img src={logo} alt="logo" /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1">
                    <NavLink className="navtext mt-2" to={HOME}>Home</NavLink>
                    <NavDropdown className="navtext" title="Layanan" id="navdrop">
                        <NavLink className="navtext2" to={TROOM}>Ruang Terapi</NavLink>
                        <NavLink className="navtext2">Tes Kesehatan</NavLink>
                        <NavLink className="navtext2">Blog/Artikel</NavLink>
                    </NavDropdown>
                    <NavLink className="navtext mt-2" to={JENK}>Jenjang Karir</NavLink>
                    <NavLink className="mt-2" to={LOGIN}><button className="logbtn mx-3">Login</button></NavLink>
                    <NavLink className="mt-2" to={SIGNUP}><button className="regbtn mx-3">Sign Up</button></NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs;
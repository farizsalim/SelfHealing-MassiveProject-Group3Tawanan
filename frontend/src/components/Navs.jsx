import {Navbar,NavDropdown,Nav,Container} from "react-bootstrap"
import { NavLink} from "react-router-dom"
import { logo, userimg } from "../image"
import "./Navs.css"
import { HOME, JENK, LOGIN, SIGNUP, TROOM, TKES, PROFILE, BLOG } from "../routes"
import { useState,useEffect } from "react"
import jwtDecode from "jwt-decode";


const Navs = () => {
    const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
    const [token,setToken] = useState(false);
    useEffect(() => {
        console.log(getToken);

        setToken((prevState) => getToken !== null ? prevState = true : prevState = false)
    }, [getToken])
    
    const decode = 
    token === true ? jwtDecode(getToken): "";
    
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    const navlog =
    token === true ? (
            <>
            <div className="dropdown navtext mt-2">
                <NavLink className="navtext mt-2 dropdown-toggle animate_animated animate__heartBeat animate__infinite	infinite animate__slow" data-bs-toggle="dropdown" aria-expanded="false" >
                    Hi, {decode.fname} <img src={userimg} alt="" width={"30px"} height={"30px"}/>
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item navtext2" to={PROFILE} id="navdrop">Profile</NavLink></li>
                    <li><NavLink className="dropdown-item navtext2" onClick={logout} id="navdrop">Log Out</NavLink></li>
                </ul>
            </div>
                
            </>
        ) : (

            <>
            <NavLink className="mt-2" to={LOGIN}><button className="logbtn mx-3">Login</button></NavLink>
            <NavLink className="mt-2" to={SIGNUP}><button className="regbtn mx-3">Sign Up</button></NavLink>
        </>
        )

    return(
        <Navbar className="navlayer fixed-top" expand="lg">
            <Container>
                <Navbar.Brand><NavLink to={HOME}><img src={logo} alt="logo" className="animate__animated animate__pulse"/></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1">
                    <NavLink className="navtext mt-2" to={HOME}>Home</NavLink>
                    <NavDropdown className="navtext" title="Layanan" id="navdrop">
                        <NavLink className="navtext2" to={TROOM}>Ruang Terapi</NavLink>
                        <NavLink className="navtext2" to={TKES}>Tes Kesehatan</NavLink>
                        <NavLink className="navtext2" to={BLOG}>Blog/Artikel</NavLink>
                    </NavDropdown>
                    <NavLink className="navtext mt-2" to={JENK}>Jenjang Karir</NavLink>
                    {navlog}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs;
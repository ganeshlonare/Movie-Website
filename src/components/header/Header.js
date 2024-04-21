import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";
import {FaPlay} from 'react-icons/fa'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = () => {
 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                {/* <FontAwesomeIcon icon ={faVideoSlash}/>Gold */}
                <div className="flex gap-2 justify-center items-center"><FaPlay />CineView</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                </Nav>
                <Link to="/signin"><Button variant="outline-info" className="me-2">Sign in</Button></Link>
                <Link to="/signup"><Button variant="outline-info">Sign up</Button></Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header

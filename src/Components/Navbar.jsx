import Logo from "../assets/Logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import Navi from "../styles/navbar.module.css";

const My_Navbar = () => {
    return(
        <>
        <Navbar expand="lg" className={Navi.nav_body}>
            <Container className={Navi.Container}>
                <div className={Navi.div_logo}>
                    <Navbar.Brand href="#home" className={Navi.logo}><img src={Logo}  width="50" height="50"></img></Navbar.Brand>

                </div>
                <Nav className={Navi.link_containers}>
                    <Nav.Link className={Navi.link} href="#home" ><h1>Home</h1></Nav.Link>
                    <Nav.Link className={Navi.link} href="#Projects"><h1>Projects</h1></Nav.Link>
                    <Nav.Link className={Navi.link} href="#Contact"><h1>Contact</h1></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
        </>
    )
}



export default My_Navbar;
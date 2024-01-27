import Logo from "../assets/Logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
const My_Navbar = () => {
    return(
        <>

        <Navbar>
            <Container>
                <Navbar.Brand><img src={Logo}  width="50"
              height="50"></img></Navbar.Brand> 
                <Nav>
                    <Nav.Item>Home</Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        
        </>
    )
}



export default My_Navbar;
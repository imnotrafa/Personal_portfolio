import Logo from "../assets/Logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import Navi from "../styles/navbar.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

    
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);


const My_Navbar = () => {



    const { contextSafe } = useGSAP();
    
    const scroll_on_click = contextSafe((element) =>{
       gsap.to(window,{duration:1,scrollTo:"#"+element,ease:"elastic.out(1,3)"});
    })

    return(
        <>
        <Navbar expand="lg" className={Navi.nav_body}>
            <Container className={Navi.Container}>
                <div className={Navi.div_logo}>
                    <Navbar.Brand href="#home" className={Navi.logo}><img src={Logo}  width="50" height="50"></img></Navbar.Brand>

                </div>
                <Nav className={Navi.link_containers}>
                    <Nav.Link className={Navi.link} onClick={() => scroll_on_click("home")} ><h1>Home</h1></Nav.Link>
                    <Nav.Link className={Navi.link} onClick={() => scroll_on_click("Projects")}><h1>Projects</h1></Nav.Link>
                    <Nav.Link className={Navi.link} onClick={() => scroll_on_click("Contact")}><h1>Contact</h1></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
        </>
    )
}



export default My_Navbar;
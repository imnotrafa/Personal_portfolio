import React from "react";
import { FaLinkedin,FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Style from "../styles/footer_style.module.css"
const Footer = () =>{


    return(
        <div className={Style.outer_div}>
                <div>
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/rafael--abreu/" target="_blank"><h1 className={Style.link}>Linkedin</h1></a>

                </div>
                <div>
                    <FaGithubSquare/>
                    <a href="https://github.com/imnotrafa" target="_blank"><h1 className={Style.link}>Github</h1></a>
                </div>
                <div>
                    <BiLogoGmail/>
                    <a href="mailto:ra242@njit.edu" target="_blank"><h1 className={Style.link}>Email</h1></a>                    
                </div>
            

            

        </div>

    )
}

export default Footer;
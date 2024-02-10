import Main_style from '../styles/main_style.module.css';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import React from "react";
import { useRef,useEffect,useState } from 'react';
import Rafael from "../assets/Rafael.jpg";
import Projects from "./Projects";
import Footer from './Footer';
import gsap from 'gsap';
gsap.registerPlugin(TextPlugin);


const Main = () => {

    const text= useRef();
    useGSAP( () => {
        var timeline = gsap.timeline({repeat:-1,repeatDelay:3});
        timeline.to(".text",{
            duration:4,
            text: "I am a Student & a Software Engineer.",
            ease: "none",
            delay:3,
        }).to(".text",{
            duration:4,
            text: "Hello  <br> I am Rafael Abreu.",
            ease: "none",
            delay:1,
        })
    });
    return (
        <>
            
                <section id="#home" className={Main_style.section}>
                    <div className={Main_style.section}>
                        <div className={Main_style.about_text}>
                            <h2 ref={text} className='text'>Hello <br></br>
                            I am Rafael Abreu.
                            </h2>
                        </div>
                        <div className={Main_style.main_img}>
                            <a href='https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:62c46068-d4a9-4da5-90b0-eba7bb8e3d77' target="_blank"><img src={Rafael} alt='Rafael'></img></a>
                        </div>
                    </div>
                </section>

                <section id="Projects" className={Main_style.Projects_section}>
                    <Projects />
                </section>

                <section id="Contact" className={Main_style.Contact_section}>
                    <h1 id={Main_style.contact}>Contact Me </h1>
                    <Footer />
                </section>
           
        
        </>
    )
}


export default Main;
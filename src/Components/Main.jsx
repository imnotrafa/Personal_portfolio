import Main_style from '../styles/main_style.module.css';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import React from "react";
import { useRef,useEffect,useState } from 'react';
import Rafael from "../assets/Rafael.jpg";
import Projects from "./Projects";
import gsap from 'gsap';
gsap.registerPlugin(TextPlugin);


const Main = () => {

    const text= useRef();
    useGSAP( () => {
        var timeline = gsap.timeline({repeat:-1,repeatDelay:3});
        timeline.to(".text",{
            duration:4,
            text: "I am a Student & <br> a  Software Engineer.",
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
            
                <section className={Main_style.section}>
                    <div className={Main_style.about_text}>
                        <h2 ref={text} className='text'>Hello <br></br>
                        I am Rafael Abreu.
                        </h2>
                    </div>
                    <div className={Main_style.main_img}>
                        <img src={Rafael} alt='Rafael'></img>
                    </div>
                </section>

                <section className={Main_style.Projects_section}>
                    {/* 
                    I can pass an array of dictionary elements to proccess its information
                    */}
                    <Projects />
                </section>

                <section className={Main_style.Contact_section}>
                    <h1>Contact</h1>
                    </section>
           
        
        </>
    )
}


export default Main;
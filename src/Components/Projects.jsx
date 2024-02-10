
//React
import React, { useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from "react";


//Images
import Haccsternship from "../assets/Projects/1.png";
import TechoReal from "../assets/Projects/2.png";
import holder from "../assets/Projects/3.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
//Slider & Resources
 gsap.registerPlugin(TextPlugin,ScrollTrigger,Flip);
import Style from  "../styles/projects_style.module.css";
import { useGSAP } from "@gsap/react";


const My_projects = [{Image:TechoReal,Name:"Techo Real Catalog",Description:"Currently serving as the Lead Backend Developer for an ongoing project, I am actively engaged in the intricate development of a sophisticated web application built on the MERN stack. This dynamic platform is designed to elegantly showcase a diverse array of properties, meticulously tailored to meet specific user requirements."},{Image:Haccsternship,Name:"HaccsTernShip",Description:"Developed and deployed a Python-based serverless chatbot that consolidates the latest tech internships from various websites, delivering them seamlessly to a Discord server. Achieved a 20% boost in internship applications, enhancing user efficiency and enjoyment in the search process."}, {Image:holder,Name:"Auto-Attendance Tracker",Description:"AutoAttendanceTracker is a web application designed with HTML, JavaScript, and various Google APIs to streamline the sign-in process and automate attendance tracking for 160 students. Enhance efficiency and accuracy in attendance management effortlessly."}];







const projects = () =>{
    /* Gotta follow which div is currently in the center 
    Make slidder button
    */
   
    const [curr,setCurr] = useState(0);
    const [selected_img, setSelected] = useState(0);
    const [clicked, setClicked] = useState(false);

    const cleaning = (direction) => {
        if (direction < 0){
            if (curr==0){
                setCurr(My_projects.length-1);
            }
            else{
                setCurr(curr -1);
            }
        }
        else {
            if(curr==My_projects.length -1){
                setCurr(0);
            }
            else{
                setCurr(curr+1);
            }
        }
    };

    const get_next = (current_index) =>{
         
        if(current_index==My_projects.length-1){
            return 0;

        }
        else{
            return current_index + 1;
        }
        
    };
    const get_prev= (current_index) => {
        if(current_index==0){
            return My_projects.length-1;
        }
        else{
            return current_index -1;
        }
    }

    
    // Animation for pulling the information
    const container = useRef();
    const tl = useRef();
   
    //make this get the object based on the given index on click
    

    //onclick make the other projects go away  from their position 
    
    // save the reverse and . timeline 

   
   const { contextSafe } = useGSAP({dependencies:[selected_img],  revertOnUpdate:true,scope:container});

   const get_position = (element) =>{    
    const curr_position = element.getBoundingClientRect();
    return {x:curr_position.left,y:curr_position.top}

   }


   const reverse = contextSafe(() =>{
            const images = gsap.utils.toArray(".img");
            
            
            gsap.timeline(
                {onStart: () =>{
                    gsap.to("#description",{opacity:0});
                },
                onComplete: () =>{
                    setClicked(false);
                }}
            
            ).to(images[selected_img],{x:0})
            .to(images[get_prev(selected_img)],{y:0,opacity:1})
            .to(images[get_next(selected_img)],{y:0,opacity:1})
   })
   //call another function to display information;
   const apply_animation = contextSafe((value,element) =>{

        if(clicked==true){
            reverse();
        }
        else{
            const position = get_position(element);
            setSelected(value);       
            const images = gsap.utils.toArray(".img");
            gsap.timeline({onComplete : () =>{
                const my_dsc = document.getElementById("description");
                gsap.to(my_dsc,{
                    x: get_position(element).x + 50,
                    y: get_position(element).y,
                    
                    opacity:1
                });
                setClicked(true);
            }})
            .to(images[get_prev(value)],{y:-500,opacity:0})
            .to(images[get_next(value)],{y:-500,opacity:0})
            .to(images[value],{x:(50 - position.x)})

        }
        

        
        
        
   })

        

   //If image is double clicked then it should go back to normal
    

    return (
        <>  
            <h1 className={Style.main_header}>Projects</h1>
            <div className={Style.main} ref={container}>
                <div className={Style.img_o_container}>
                        <div className={Style.img_container} >
                            <img onClick={() => apply_animation(0,document.getElementById("img1"))} src={My_projects[0].Image} alt="nofound" id="img1" className="img" value="False" />
                            
                            <img onClick={() => apply_animation(1,document.getElementById("img2"))} src={My_projects[1].Image} alt="nofound" id="img2"  className="img" value="False"/>
                            
                            <img  onClick={() => apply_animation(2,document.getElementById("img3"))} src={My_projects[2].Image} alt="nofound" id="img3" className="img" value="False" />
                        </div>
                    
                </div>
                <div id="description" className={Style.description}>
                    <h1 className={Style.description_name}>{My_projects[selected_img].Name}</h1>
                    <div className={Style.dsc}> 
                        <p className={Style.description_dsc}>{My_projects[selected_img].Description}</p>
                    </div>    
                </div> 
            </div>

            
        </>
    )

    
}



export default projects
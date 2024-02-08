
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


const My_projects = [{Image:TechoReal,Name:"TechoReal Catalog",Description:"A TV app"},{Image:Haccsternship,Name:"HaccsTernShip",Description:"python Discord bot that Scrapes the web"}, {Image:holder,Name:"Deloitte",Description:"project at deloitte"}];







const projects = () =>{
    /* Gotta follow which div is currently in the center 
    Make slidder button
    */
   
    const [curr,setCurr] = useState(0);
    const [selected_img, setSelected] = useState(0);

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
                    gsap.to(".description",{opacity:0});
                }}
            
            ).to(images[selected_img],{x:0})
            .to(images[get_prev(selected_img)],{y:0,opacity:1})
            .to(images[get_next(selected_img)],{y:0,opacity:1})
            selected_img(5);     
   })
   //call another function to display information;
   const apply_animation = contextSafe((value,position) =>{
        setSelected(value);       
        const images = gsap.utils.toArray(".img");
        gsap.timeline({onComplete : () =>{
            const my_dsc = document.getElementById("description");
            gsap.to(my_dsc,{
                opacity:1
            })
        }})
        .to(images[get_prev(selected_img)],{y:-500,opacity:0})
        .to(images[get_next(selected_img)],{y:-500,opacity:0})
        .to(images[selected_img],{x:(50 - position.x)})
        
   })

        

   //If image is double clicked then it should go back to normal
    

    return (
        <>  
            <h1>Projects</h1>
            <div className={Style.main}>
                <div className={Style.img_o_container}>
                        <div className={Style.img_container} ref={container}>
                            <img onClick={() => apply_animation(0,get_position(document.getElementById("img1")))} src={My_projects[0].Image} alt="nofound" id="img1" className="img" />
                            
                            <img onClick={() => apply_animation(1,get_position(document.getElementById("img2")))} src={My_projects[1].Image} alt="nofound" id="img2"  className="img"/>
                            
                            <img  onClick={() => apply_animation(2,get_position(document.getElementById("img3")))} src={My_projects[2].Image} alt="nofound" id="img3" className="img" />
                        </div>
                    
                </div>
                <div id="description" className={Style.description}>
                    <h1 className={Style.description_name}>{My_projects[selected_img].Name}</h1>
                    <div> 
                        <p className={Style.description_dsc}>{My_projects[selected_img].Description}</p>
                    </div>    
                </div> 
                <button onClick={reverse}>exit</button>
            </div>

            
        </>
    )

    
}



export default projects
import { useState } from 'react'
import My_Navbar from './Components/Navbar'
import Main from './Components/main';

//Check if it is a smartphone 
import './App.css'
const App = () => {
  console.log(window.innerWidth);
    if(window.innerWidth < 1200){
    return (
      <><h1>This page version is currently available for desktop and laptops</h1></>
    )
  }
  else{
    return (
      <>
        <My_Navbar />
        <Main /> 
      </>
    )

  }
  
}

export default App

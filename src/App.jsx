import { useState } from 'react'
import My_Navbar from './Components/Navbar'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <My_Navbar />
     
    </>
  )
}

export default App

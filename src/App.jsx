import { useState } from 'react'
import './App.css'

import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Reviews from './Components/Reviews'
import SocialMedia from './Components/SocialMedia'
import Rout from './Components/Rout'

import * as bootstrap from 'bootstrap'
import { BrowserRouter } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)
  // const[currentPath, setCurrenPath] = useState(window.location.pathname)
  return (
    <>
    <BrowserRouter>
      <Rout></Rout>
    </BrowserRouter>
      
    </>
  )
}

export default App

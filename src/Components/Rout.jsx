import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import NavBar from './NavBar'
import Banner from './Banner'
import Home from '../Screens/Home'

const Rout = () => {
  return (
    <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={ <Home />}>
        </Route>
    </Routes>
  )
}

export default Rout
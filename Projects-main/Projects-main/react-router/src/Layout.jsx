import React from 'react'
import Header from './Componets/Heder'
import Footer from './Componets/Footer'
import { Outlet } from 'react-router-dom'
import About from './Componets/About'
import Home from './Componets/Home'

function Layout() {
  return (
    <>
    <Header/>
    {/* <Home/> */}
    <Outlet/>
    <Footer/>
    
   
    </>
  )
}

export default Layout
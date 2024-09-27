import { useState } from 'react'
import NvaveBar from './components/NvaveBar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured projects'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='h-screen w-ful text-zinc-100 bg-black'>
        <NvaveBar />
        <LandingPage />
        <Marque />
        <About/>
        <Eye/>
        <Featured/>
        <Card/>
        <Footer/>

      </div>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Routes, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Componets/Home'
import About from './Componets/About'
import Contact from './Componets/Contect'
import User from './Componets/User'
import Github from './Componets/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: 'Home',
//         element: <Home/>,
//       },
//       {
//         path:'About',
//         element:<About/>
//       },
//       {
//         path:'Contect',
//         element:<Contact/>
//       },
//     ]
//   }
// ])


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='Home' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contect' element={<Contact />} />
      <Route path='user/:id' element={<User/>}/>
      <Route path='Github-Followers' element={<Github/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

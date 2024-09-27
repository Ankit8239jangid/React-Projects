import { useState } from 'react'
import './index.css'
import Baground from './component/baground'
import Forground from './component/forground'
import Love from './component/love'




function App() {
  return (
    <>
      <div className='relative bg-zinc-800 h-screen  w-full'>
        <Baground />
        <Forground />
       {/* <div  className=" fixed h-screen w-full bg-gradient-to-r from-pink-300 via-purple-300 to-red-300">
            <Love  />
        </div> */}
      </div>


    </>
  )
}

export default App

// function App() {
//   const myref = useRef(null);
//   return (
//     <>
//       <div ref={myref} className='relative bg-zinc-800 h-screen  w-full'>
//         {/* <Baground /> */}
//         {/* <Forground /> */}
//         <Love refrence={myref}/>
//       </div>


//     </>
//   )
// }

// export default App

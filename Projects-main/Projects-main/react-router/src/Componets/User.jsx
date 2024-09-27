import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-black text-center'>
        
        <h1 className='bg-black text-white p-5 text-2xl'> User :  {id} </h1>
        
         </div>
  )
}

export default User
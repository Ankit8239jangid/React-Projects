import React from 'react'
import FeaturedCard from './FeaturedCard'

export default function Featured() {
  return (
    <div className='w-full py-10 bg-black'>
        <div className="border-b-2 border-zinc-900">
        <h1 className='text-5xl mb-8 '>Featured projects</h1>
        </div>

       <FeaturedCard/>

    </div>

  )
}

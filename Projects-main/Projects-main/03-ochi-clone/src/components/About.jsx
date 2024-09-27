import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
    return (
        <div className="bg-zinc-900">
            <div className='w-full py-20 text-black bg-[rgb(205,234,104)] rounded-tl-3xl rounded-tr-3xl text-5xl'>

                <h1 className='py-5 px-8 underline'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

                <div className="About_2 flex justify-between flex-wrap border-t-[1px] border-zinc-900">
                    <div className="px-20 py-6">
                        <h1>Our approach:</h1>
                        <button className='flex gap-2 bg-zinc-100 p-3 mt-7 rounded-full text-[1.5vw]'>read more
                            <GoArrowUpRight className=' hover:bg-green-600 text-[2vw] hover:rounded-full' />
                        </button>
                    </div>

                    <div className="h-[70vh] bg-[rgb(152,178,57)] mx-10 mt-7 rounded-3xl ">

                        <img className='h-full w-full rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                    </div>

                </div>





            </div>

        </div>
    )
}

import React from 'react'

export default function Card() {
    return (
        <div className="flex h-screen w-full items-center justify-center gap-4  px-10 rounded-3xl ">

            {/* First Card */}
            <div className= " transition duration-500 ease-in-out hover:scale-95 h-96 2 w-1/2 bg-[#004C43] text-[#A6DD76] flex justify-center items-center rounded-lg">
                <div className=" relative text-center">
                
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                   
                    <p className=" absolute -left-56 top-44 text-xs border border-[#A6DD76] rounded-full px-4 py-1 ">©2019–2022</p>
                </div>
            </div>

            {/* Second Card */}

            <div className=" srcon_Card flex  h-96 w-1/2 gap-5">


                <div className="transition duration-500 ease-in-out hover:scale-95  bg-[#1E1E1E] text-[#A6DD76]  h-full w-1/2 flex justify-center items-center rounded-lg">
                    <div className=" relative text-center">
                      
                       <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <p className="absolute -left-16 -bottom-36 text-xs border border-[#A6DD76] rounded-full ">RATING 5.0 ON CLUTCH</p>
                    </div>
                </div>




                {/* Third Card */}
                <div className=" transition duration-500 ease-in-out hover:scale-95 relative h-full w-1/2  bg-[#1E1E1E] text-[#A6DD76]  flex justify-center items-center rounded-lg">
                    <div className="text-center">
                        
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <p className=" absolute right-10 bottom-5 text-xs border border-[#A6DD76] rounded-full px-4 py-1 inline-block">BUSINESS BOOTCAMP ALUMNI</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

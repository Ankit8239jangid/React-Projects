import React from 'react'

export default function Footer() {
    return (
        <div className="footer flex justify-between items-center h-screen w-full">

            <div className="right_footer flex flex-col justify-between h-full w-1/2">
                <div className="  text-zinc-800 leading-[.8] tracking-tight right_foootr_text uppercase text-8xl pt-20 pl-20 font-semibold">
                    <h1>eye-</h1>
                    <h1>opening</h1>
                </div>

                <h1 className='  text-zinc-800 pl-24 text-4xl font-semibold'>ochi</h1>

            </div>

            {/* -------------------left------------------------------------------- */}
            <div className="left_footer h-full w-1/2  ">
                <div className="left_foootr_text uppercase text-7xl pt-20 pl-20 font-semibold">
                    <h1 className=' text-zinc-800 leading-[.8] tracking-tight relative right-20'>presentations</h1>

                </div>

                <div className="sosial pt-5">
                    <span className=' block text-black ml-2 font-semibold'>S:</span>

                    <div className="links py-3">
                        <a className='block ml-2 font-semibold text-black' href="">Insta</a>
                        <a className='block ml-2 font-semibold text-black' href="">Facebook</a>
                        <a className='block ml-2 font-semibold text-black' href="">Behance</a>
                        <a className='block ml-2 font-semibold text-black' href="">Linkdin</a>
                    </div>

                    <span className='block ml-2 font-semibold text-black' >L:</span>

                    <div className="location py-3">
                        <p className='block ml-2 font-semibold text-black'>202-1965 W 4th Ave</p>
                        <p className='block ml-2 font-semibold text-black'>Vancouver, Canada</p>
                        <p className='block ml-2 font-semibold text-black'>30 Chukarina St</p>
                        <p className='block ml-2 font-semibold text-black'>Lviv, Ukraine</p>
                    </div>

                    <span className='block ml-2 font-semibold text-black' >E</span>

                    <div className="contect py-1">
                        <p className='block ml-2 font-semibold text-black'>hello@ochi.design</p>
                    </div>
                    <h1 className='block ml-2 font-semibold text-zinc-500'>© ochi design 2024. Legal Terms</h1>



                </div>

            </div>


        </div>
    )
}

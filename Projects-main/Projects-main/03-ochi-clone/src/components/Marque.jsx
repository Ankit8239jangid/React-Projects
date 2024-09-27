import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
    return (

        <div className='bg-zinc-900'>
            <div className='py-10 w-full h-[70vh] bg-[rgb(0,77,67)] rounded-tl-3xl rounded-tr-3xl'>
                <div className="flex gap-2 border-t-2 border-zinc-700 overflow-hidden">
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                        className='text-[19vw] font-semibold whitespace-nowrap leading-none uppercase'>
                        we are Ochi
                    </motion.h1>

                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                        className='text-[19vw] font-semibold whitespace-nowrap leading-none uppercase'>
                        we are Ochi
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

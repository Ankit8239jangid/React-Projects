import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';

export default function () {
    const textItems = ['We create', 'eye-opening', 'presentations'];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each child animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <motion.div
                className='Textstruchere mt-36 px-20 font-sans'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* -----------------------text -loop -------------------------------- */}
                {textItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="masker"
                        variants={itemVariants}
                    >
                        <div className="landing_text_image flex items-center">
                            {index === 1 && (
                                <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76 , 0 ,0.24 , 1], duration: 1, delay: .6}} className='w-[9vw] h-[5vw] bg-red-600 my-3 mr-2 rounded bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center'></motion.div>
                            )}

                            <h1 className='font-bold text-[6.5vw] uppercase tracking-tighter leading-[.75]'>{item}</h1>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* -------------------landing_page - footer----------------------------- */}
            <div className="border border-t-1 border-zinc-800 mt-32 flex justify-between py-3 px-10 border-b-0">
                {['For public and private companies', 'From the first pitch to IPO'].map((item, border) =>
                    <p className='text-sm text-[1vw]' key={border}>{item}</p>
                )}
                {/* ----------------------------Button + Arrow------------------------------ */}
                <div className='flex items-center gap-2'>
                    <button className='text-[1vw] border-2 border-zinc-700 rounded-2xl px-3 py-1 uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                        Start the project
                    </button>

                    <GoArrowUpRight className='text-3xl border-2 border-zinc-700 hover:bg-sky-700 rounded-full' />
                </div>
            </div>
        </div>
    );
}

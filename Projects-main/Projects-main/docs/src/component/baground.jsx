import React from "react";
import { motion } from "framer-motion";

function Baground() {
    // Define the container variant that controls the staggering of children (letters)
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger the animation of each letter by 0.2s
            }
        }
    };

    // Define the variant for each letter
    const letterVariants = {
        hidden: { opacity: 0, y: -100 }, // Start above the view
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 10, stiffness: 100 }
        }
    };

    return (
        <>
            <div className="flex justify-center fixed z-[2] items-center h-screen w-full bg-white ">
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}

                    className='absolute top-[10%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900'
                >
                    Document
                </motion.div>

                <motion.h1
                    className='text-[17vw] leading-none tracking-tight text-zinc-900'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    // initial={{ opacity: 0, y: 50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 3, delay: 0.5 }}

                >
                    {"Docs.".split("").map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

            </div>
        </>
    );
}

export default Baground;

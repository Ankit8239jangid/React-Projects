import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"



function Card({ data, refrence }) {
    return (

        // ..........................Main card contener--------------------------------------------------
        <motion.div 
            drag
            dragConstraints={refrence}
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            className="w-48 flex-shrink-0 relative h-[40vh] rounded-[20px] bg-blue-50 text-black p-4 overflow-hidden bg-[url('')] "
            initial={{ opacity: 0, y:0 }}
            animate={{ opacity: 1, y:50 }}
            transition={{ duration: 1, delay: 1 }}
        >
            
            {/*----------------Top - Icone ------------------------------------------------------- */}
            <FaRegFileAlt />

            {/* ------------------------Description -------------------------------------------------- */}
            <p className="text-sm mt-5 leading-tight">{data.desc}</p>

            {/* ------------------------- File size  ------------------------------------------------- */}
            <div className="absolute bottom-0 -translate-x-4 text-center w-full">
                <div className="flex items-center mb-4 gap-20 px-5">
                    <h5>{data.filesize}</h5>


                    {/* ------------------------------downlode && close icon ----------------------------------- */}

                    <span className="h-6 w-6 bg-gray-700 rounded-full flex items-center justify-center">
                        {data.close ? <IoMdCloseCircle className="bg-white rounded-xl" /> : <LuDownload className="text-white size-3" />}
                    </span>
                </div>

                {/* ------------------------------Footer --------------------------------------------------- */}
                {data.tag.isOpen && (
                    <div className={`tag h-full w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-1 flex items-center justify-center text-white`}>
                        <h3 className="font-light">{data.tag.tagTitle}</h3>
                    </div>
                )}
                
            </div>


        </motion.div>
    );
}

export default Card;

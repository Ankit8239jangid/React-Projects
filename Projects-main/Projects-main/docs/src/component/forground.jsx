import React, { useRef, useEffect } from "react";
import Card from "./card";



function Forground() {
    const myref = useRef(null);

    // ---------------------------------------- card - Data --------------------------------------------------
    const Data = [
        {
            desc: "Card 1 : hellow i am ankit jangid let's make the things esey for the wolrld.",
            filesize: "1.2mb",
            close: false,
            tag: { isOpen: true, tagTitle: 'Download', tagColor: 'black' },
        },
        {
            desc: "Card 2 : loje sndf laoi abdod   ljf oww iepo amot kahidf sksos dhfkfud ",
            filesize: "0.8mb",
            close: true,
            tag: { isOpen: true, tagTitle: 'Download', tagColor: 'blue' },
        },
        {
            desc: "Card 3 : ankitdf dkdjdod sbsfofd co n kkdjd nddirt  rllfod sbssss  mcvkfd d,dldd ",
            filesize: "2.3mb",
            close: false,
            tag: { isOpen: true, tagTitle: 'Upload', tagColor: '' },
        },
    ];

    return (

        <div ref={myref} className=' fixed z-[3] w-full h-screen flex  gap-8 '>
            {Data.map((item, index) => (
                <Card key={index} data={item} refrence={myref} />
            ))}


        </div>


    )
}

export default Forground;

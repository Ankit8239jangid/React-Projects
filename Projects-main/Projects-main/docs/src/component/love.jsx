import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function Love() {
    const ref = useRef(null); 

    const cards = [
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg    ',
            title: 'Card 1',
            description: 'This is a description for Card 1.',
        },
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg    ',
            title: 'Card 2',
            description: 'This is a description for Card 2.',
        },
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg    ',
            title: 'Card 3',
            description: 'This is a description for Card 3.',
        },
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg    ',
            title: 'Card 4',
            description: 'This is a description for Card 4.',
        },
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg    ',
            title: 'Card 5',
            description: 'This is a description for Card 5.',
        },
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg    ',
            title: 'Card 6',
            description: 'This is a description for Card 6 lo.This is a description for Card 6 lo.This is This is a description for Card 6 lo.This is a . ',
        },
    ];

    return (
        <div ref={ref} className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-red-300">
            {cards.map((card, index) => (
                <motion.div 
                    key={index}
                    drag 
                    dragConstraints={ref} // Pass the reference here
                    whileDrag={{ scale: 1.2 }}
                    dragElastic={0.5}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
                    className="absolute w-64 h-80 bg-white text-black flex flex-col items-center  justify-center shadow-lg rounded-lg top-8 left-1/2 right-1/2 " >
                    <img src={card.image} alt={card.title} className="w-full  object-cover rounded" />
                    <h2 className="mt-4  bottom-1/4 text-lg font-bold">{card.title}</h2>
                    <p className="  text-center mt-2">{card.description}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default Love;

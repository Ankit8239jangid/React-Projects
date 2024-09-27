import React from 'react';

const LeftcardData = [

    {
        title: 'Planetly',
       
        imageUrl: 'https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1100.jpg',
        buttons: ['Sales Deck', 'Policy Deck & Playbook', 'agency']
    },
    {
        title: 'AH2 & Matt Horn',
        imageUrl: 'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png',
        buttons: ['Pitch Deck']
    },


    // Add more card data here as needed
];



const RightcardData = [

    {
        title: 'Black Book',
        imageUrl: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1100.jpg',
        buttons: ['Pitch Deck']
    },
    {
        title: 'Planetly',
        imageUrl: 'https://ochi.design/wp-content/uploads/2022/05/10-1326x1100.png',
        buttons: ['Sales Deck', 'Policy Deck & Playbook', 'agency']
    },
    // Add more card data here as needed
];

export default function FeaturedCard() {
    return (
        < div className='flex gap-4'>
            {/* // -----------------left-card-Data---------------------------------------------// */}
            <div className='w-full h-auto flex flex-col ml-20  justify-around gap-10'>
                {LeftcardData.map((card, index) => (
                    <div key={index} className="card_container">
                        <li className='mt-4 mb-4'>{card.title}</li>
                        <div className={`w-[40vw] h-[80vh] rounded-xl transition duration-500 ease-in-out hover:scale-95 `}>
                            <div className="h-full w-full">
                                <img className=' h-full w-full rounded-3xl' src={card.imageUrl} alt="" />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {card.buttons.map((buttonText, btnIndex) => (
                                <button
                                    key={btnIndex}
                                    className="mt-5 text-[1vw] px-3 py-2 text-sm font-semibold border border-zinc-100 rounded-full transition duration-300 ease-in-out hover:scale-95 hover:bg-zinc-200 hover:text-black"
                                >
                                    {buttonText.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {/* --------------------------------------right-card data------------------------ */}



            <div className='w-full h-auto flex  flex-col justify-around gap-10'>
                {RightcardData.map((card, index) => (
                    <div key={index} className="card_container">
                        <li className='mt-4 mb-4'>{card.title}</li>
                        <div className={`w-[40vw] h-[80vh] transition duration-500 ease-in-out hover:scale-95 `}>

                            <img className=' rounded-3xl h-full w-full' src={card.imageUrl} alt="" />

                        </div>

                        <div className="flex gap-4">
                            {card.buttons.map((buttonText, btnIndex) => (
                                <button
                                    key={btnIndex}
                                    className="mt-5 text-[1vw] px-3 py-2 text-sm font-semibold border border-zinc-100 rounded-full transition duration-300 ease-in-out hover:scale-95 hover:bg-zinc-200 hover:text-black"
                                >
                                    {buttonText.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

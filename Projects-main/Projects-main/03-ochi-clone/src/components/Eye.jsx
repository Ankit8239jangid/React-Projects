import React, { useEffect, useState } from 'react';

export default function Eye() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX - window.innerWidth / 2;
            let mouseY = e.clientY - window.innerHeight / 2;

            // Correct angle calculation
            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            setRotate(angle - 180);
        });

    });

    return (
        <div className="h-sc w-full overflow-hidden">
            <div className="Eye flex items-center justify-center w-full h-screen bg-red-600 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-center bg-cover">
                <div className="eye_boles flex gap-10">
                    <div className="flex justify-center items-center w-40 h-40 rounded-full bg-zinc-50">

                        <div className="relative w-32 h-32 rounded-full bg-zinc-900">
                            <h1 className=' uppercase relative left-12 top-14'>Play</h1>
                            <div
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                }}
                                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                            >
                                <div className="w-5 h-5 rounded-full bg-zinc-50"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-40 h-40 rounded-full bg-zinc-50">
                        <div className="relative w-32 h-32 rounded-full bg-zinc-900">
                        <h1 className=' uppercase relative left-12 top-14'>Play</h1>
                            <div
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                }}
                                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                            >
                                <div className="w-5 h-5 rounded-full bg-zinc-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

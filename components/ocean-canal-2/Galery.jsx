"use client";
import Image from "next/image";
import React, { useState } from "react";

const Galery = () => {
    const data = [
        {
            id: "1",
            gallery: "/img/tower-4/roomA3.webp",
        },
        {
            id: "2",
            gallery: "/img/tower-4/roomB2.webp",
        },    
        {
            id: "3",
            gallery: "/img/tower-4/roomC2.webp",
        }, 
        {
            id: "4",
            gallery: "/img/tower-4/roomD2.webp",
        }, 
        {
            id: "5",
            gallery: "/img/tower-4/roomE2.webp",
        }, 
        {
            id: "6",
            gallery: "/img/tower-4/roomF2.webp",
        }, 
        {
            id: "7",
            gallery: "/img/tower-4/roomG2.webp",
        }, 
        {
            id: "8",
            gallery: "/img/tower-4/roomH2.webp",
        }, 
        {
            id: "9",
            gallery: "/img/tower-4/roomI2.webp",
        }, 
    ];

    const [showPlan] = useState({});

    return (
        <div className="lg:mx-24 mx-6 lg:my-12 my-6">
            <h4 className='lg:py-5 py-0 lg:text-6xl text-2xl'>Galería de Interiores</h4>
            <div className=" container mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-0 grid-cols-1 text-center m-auto">
                {data.map((room, index) => (
                    <div key={index} >
                        {showPlan[room.id] = (
                            <div>
                            <>
                                <Image
                                    className="w-full object-contain h-60"
                                    src={room.gallery}
                                    width={500}
                                    height={600}
                                />
                            </>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galery;

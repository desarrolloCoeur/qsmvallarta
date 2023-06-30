"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    FaBed,
    FaBath,
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
} from "react-icons/fa";

const Rooms = () => {
    const data = [
        {
            id: "1",
            title: "Room Type - A",
            bedrooms: "0",
            bathroom: "0",
            size: "141 m2 – 1,518 ft2",
            gallery: [
                "/img/tower-garden/garden-roomA.webp",
                "/img/tower-garden/garden-roomA2.webp",
            ],
            plan: "/img/tower-garden/garden-roomA1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "2",
            title: "Room Type - B",
            bedrooms: "0",
            bathroom: "0",
            size: "65 m2 – 699.5 ft2",
            gallery: [
                "/img/tower-garden/garden-roomB.webp",
                "/img/tower-garden/garden-roomB2.webp",
            ],
            plan: "/img/tower-garden/garden-roomB1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "3",
            title: "Room Type - C",
            bedrooms: "0",
            bathroom: "0",
            size: "105 m2 – 1130 ft2",
            gallery: [
                "/img/tower-garden/garden-roomC.webp",
                "/img/tower-garden/garden-roomC2.webp",
            ],
            plan: "/img/tower-garden/garden-roomC1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "4",
            title: "Room Type - D",
            bedrooms: "0",
            bathroom: "0",
            size: "112 m2 – 1205.5 ft2",
            gallery: [
                "/img/tower-garden/garden-roomD.webp",
                "/img/tower-garden/garden-roomD2.webp",
            ],
            plan: "/img/tower-garden/garden-roomD1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "5",
            title: "Room Type - E",
            bedrooms: "0",
            bathroom: "0",
            size: "127 m2 – 1,367 ft2",
            gallery: [
                "/img/tower-garden/garden-roomE.webp",
                "/img/tower-garden/garden-roomE2.webp",
            ],
            plan: "/img/tower-garden/garden-roomE1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "6",
            title: "Room Type - F",
            bedrooms: "0",
            bathroom: "0",
            size: "53 m2 – 570.5 ft2",
            gallery: [
                "/img/tower-garden/garden-roomF.webp",
                "/img/tower-garden/garden-roomF2.webp",
            ],
            plan: "/img/tower-garden/garden-roomF1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "7",
            title: "Room Type - G",
            bedrooms: "0",
            bathroom: "0",
            size: "242.2 m2 – 2,607 ft2",
            gallery: [
                "/img/tower-garden/garden-roomG.webp",
                "/img/tower-garden/garden-roomG4.webp",
                "/img/tower-garden/garden-roomG5.webp",
                "/img/tower-garden/garden-roomG6.webp",
            ],
            plan: [ 
                "/img/tower-garden/garden-roomG1.webp",
                "/img/tower-garden/garden-roomG2.webp",
                "/img/tower-garden/garden-roomG3.webp",
            ],
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "8",
            title: "Room Type - H",
            bedrooms: "0",
            bathroom: "0",
            size: "225 m2 – 2,422 ft2",
            gallery: [
                "/img/tower-garden/garden-roomH.webp",
                "/img/tower-garden/garden-roomH4.webp",
                "/img/tower-garden/garden-roomH5.webp",
                "/img/tower-garden/garden-roomH6.webp",
            ],
            plan: [ 
                "/img/tower-garden/garden-roomH1.webp",
                "/img/tower-garden/garden-roomH2.webp",
                "/img/tower-garden/garden-roomH3.webp",
            ],
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "9",
            title: "Room Type - I",
            bedrooms: "0",
            bathroom: "0",
            size: "157.5 m2 – 1,695 ft2",
            gallery: [
                "/img/tower-garden/garden-roomI.webp",
                "/img/tower-garden/garden-roomI3.webp",
                "/img/tower-garden/garden-roomI4.webp",
            ],
            plan: [ 
                "/img/tower-garden/garden-roomI1.webp",
                "/img/tower-garden/garden-roomI2.webp",
            ],
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "10",
            title: "Room Type - J",
            bedrooms: "0",
            bathroom: "0",
            size: "299.5 m2 – 3,223 ft2",
            gallery: [
                "/img/tower-garden/garden-roomJ.webp",
                "/img/tower-garden/garden-roomJ4.webp",
                "/img/tower-garden/garden-roomJ5.webp",
                "/img/tower-garden/garden-roomJ6.webp",
            ],
            plan: [ 
                "/img/tower-garden/garden-roomJ1.webp",
                "/img/tower-garden/garden-roomJ2.webp",
                "/img/tower-garden/garden-roomJ3.webp",
            ],
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
    ];

    const [showInfo, setShowInfo] = useState({});
    const [showPlan, setShowPlan] = useState({});

    const toggleInfo = (roomId) => {
        setShowInfo((prevInfo) => ({
            ...prevInfo,
            [roomId]: !prevInfo[roomId],
        }));
    };

    const togglePlan = (roomId) => {
        setShowPlan((prevInfo) => ({
            ...prevInfo,
            [roomId]: !prevInfo[roomId],
        }));
    };

    return (
        <div className="lg:m-24 m-6">
        <div className=" container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 text-center m-auto">
            {data.map((room, index) => (
                <div key={index} className="border border-slate-300 pb-6">
                    {showPlan[room.id] ? (
                        <>
                            <Image
                                className="w-full object-cover h-60"
                                src={room.plan}
                                alt={room.title}
                                width={300}
                                height={380}
                            />   
                        </>
                    ) : (
                        <>
                            <Image
                                className="w-full object-cover h-60"
                                src={room.gallery[0]}
                                alt={room.title}
                                width={300}
                                height={380}
                            />
                        </>
                    )}

                    <h3 className="font-bold lg:text-4xl text-2xl my-6 mx-3">{room.title}</h3>
                    {showInfo[room.id] ? (
                        <div className="flex gap-3 m-auto justify-center">
                            <table className="flex items-center gap-2 textroom border-collapse">
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300 py-1 px-3"></td>
                                        <td className="border border-slate-300 py-1 px-3">M2</td>
                                        <td className="border border-slate-300 py-1 px-3">SQF</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 py-1 px-3">Interior</td>
                                        <td className="border border-slate-300 py-1 px-3">{room.interiorm}</td>
                                        <td className="border border-slate-300 py-1 px-3">{room.interiorsqf}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 py-1 px-3">Terrace</td>
                                        <td className="border border-slate-300 py-1 px-3">{room.terracem}</td>
                                        <td className="border border-slate-300 py-1 px-3">{room.terracesqf}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div>
                            <div className="flex gap-3 m-auto justify-center">
                                <div className="flex items-center gap-2 textroom">
                                    <FaBed /> {room.bedrooms} Bedrooms
                                </div>
                                <div className="flex items-center gap-1 textroom ">
                                    <FaBath /> {room.bathroom} Bathrooms
                                </div>
                            </div>
                            <div>
                                <p className="textroom">{room.size}</p>
                                <div className="flex justify-center ">
                                    <FaLongArrowAltLeft />
                                    <FaLongArrowAltRight />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="pt-6">
                        <button
                            className="btn-primary"
                            onClick={() => toggleInfo(room.id)}
                        >
                            More Info
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => togglePlan(room.id)}
                        >
                            View Plan
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};



export default Rooms;

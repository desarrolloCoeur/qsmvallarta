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
            title: "Penthouse Corner",
            bedrooms: "4",
            bathroom: "4",
            size: "289 m² - 3110.77 Feet",
            gallery: [
                "/img/tower-1-and-2/penthouse-corner-1.jpg",
                "/img/tower-1-and-2/penthouse-corner-2-scaled.jpg",
                "/img/tower-1-and-2/penthouse-corner-3.jpg",
                "/img/tower-1-and-2/quinta-san-miguel-bathroom-2-scaled.jpg",
                "/img/tower-1-and-2/penthouse-corner-5.jpg",
            ],
            plan: "/img/tower-1-and-2/PENTHOUSE.pdf",
            // interiorm: "82",
            // interiorsqf: "882",
            // terracem: "62",
            // terracesqf: "667",
        },
        {
            id: "2",
            title: "Penthouse Standard",
            bedrooms: "3",
            bathroom: "3.5",
            size: "254 m² - 2734 feet",
            gallery: [
                "/img/tower-1-and-2/penthouse-estandard-1.jpg",
                "/img/tower-1-and-2/penthouse-estandard-2.jpg",
                "/img/tower-1-and-2/penthouse-estandard-3.jpg",
                "/img/tower-1-and-2/penthouse-estandard-4.jpg",
                "/img/tower-1-and-2/penthouse-estandard-5.jpg",
            ],
            plan: "/img/tower-1-and-2/Penthouse-standard-1.pdf",
            // interiorm: "146",
            // interiorsqf: "1571",
            // terracem: "248",
            // terracesqf: "2670",
        },
        {
            id: "3",
            title: "Corner",
            bedrooms: "2",
            bathroom: "2",
            size: "143 m² |1539.24 feet",
            gallery: [
                "/img/tower-1-and-2/san-miguel-standard-esquina-scaled.jpg",
                "/img/tower-1-and-2/corder-2.jpg",
                "/img/tower-1-and-2/corder-3.jpg",
                "/img/tower-1-and-2/penthouse-corner-4.jpg",
                "/img/tower-1-and-2/corder-5.jpg",
            ],
            plan: "/img/tower-1-and-2/apartment-corner-1.pdf",
            // interiorm: "140.5",
            // interiorsqf: "1512",
            // terracem: "78.5",
            // terracesqf: "845",
        },
        {
            id: "4",
            title: "Standard",
            bedrooms: "2",
            bathroom: "2",
            size: "105 m² | 1130.21 feet",
            gallery: [
                "/img/tower-1-and-2/Captura-de-Pantalla-2020-09-28-a-las-16.11.38.jpg",
                "/img/tower-1-and-2/san-miguel-standard-scaled.jpg",
                "/img/tower-1-and-2/standard-2.jpg",
                "/img/tower-1-and-2/standard-3.jpg",
                "/img/tower-1-and-2/standard-4.jpg",
            ],
            plan: "/img/tower-1-and-2/apartment-standard-1.pdf",
            // interiorm: "140.5",
            // interiorsqf: "1512",
            // terracem: "78.5",
            // terracesqf: "845",
        },
        {
            id: "5",
            title: "Loft",
            bedrooms: "1",
            bathroom: "1",
            size: "53 m² - 570.5 Feet",
            gallery: [
                "/img/tower-1-and-2/loft-1-scaled.jpg",
                "/img/tower-1-and-2/loft-2.jpg",
                "/img/tower-1-and-2/loft-3.jpg",
                "/img/tower-1-and-2/loft-4.jpg",
            ],
            plan: "/img/tower-1-and-2/apartment-loft-1.pdf",
            // interiorm: "140.5",
            // interiorsqf: "1512",
            // terracem: "78.5",
            // terracesqf: "845",
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
                            <div className=" m-6">
                            <>
                                <Image
                                    className="w-full object-contain h-60"
                                    src={room.plan}
                                    alt={room.title}
                                    width={500}
                                    height={600}
                                />
                            </>
                            </div>
                        ) : (
                            <div className=" m-6">
                            <>
                                <Image
                                    className="w-full object-contain h-60"
                                    src={room.gallery[0]}
                                    alt={room.title}
                                    width={500}
                                    height={600}
                                />
                            </>
                            </div>
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

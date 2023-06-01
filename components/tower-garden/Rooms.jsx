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
            bedrooms: "2",
            bathroom: "2",
            size: "144 m2 - 1,550 ft2",
            gallery: [
                "/img/tower-4/roomA.webp",
                "/img/img-2.webp",
                "/img/img-3.webp",
            ],
            plan: "/img/tower-4/roomA1.webp",
            interiorm: "82",
            interiorsqf: "882",
            terracem: "62",
            terracesqf: "667",
        },
        {
            id: "2",
            title: "Room Type - B",
            bedrooms: "3",
            bathroom: "3",
            size: "394 m2 – 4,241 ft2",
            gallery: [
                "/img/tower-4/roomB.webp",
                "/img/img-2.webp",
                "/img/img-3.webp",
            ],
            plan: "/img/tower-4/roomB1.webp",
            interiorm: "146",
            interiorsqf: "1571",
            terracem: "248",
            terracesqf: "2670",
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
        <div className="lg:m-24 m-6 container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1">
            {data.map((room, index) => (
                <div key={index}>
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

                    <h3>{room.title}</h3>
                    {showInfo[room.id] ? (
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>M2</td>
                                        <td>SQF</td>
                                    </tr>
                                    <tr>
                                        <td>Interior</td>
                                        <td>{room.interiorm}</td>
                                        <td>{room.interiorsqf}</td>
                                    </tr>
                                    <tr>
                                        <td>Terrace</td>
                                        <td>{room.terracem}</td>
                                        <td>{room.terracesqf}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                    <FaBed /> {room.bedrooms} Bedrooms
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaBath /> {room.bathroom} Bathrooms
                                </div>
                            </div>
                            <div>
                                <p>{room.size}</p>
                                <div className="flex ">
                                    <FaLongArrowAltLeft />
                                    <FaLongArrowAltRight />
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
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
    );
};

export default Rooms;

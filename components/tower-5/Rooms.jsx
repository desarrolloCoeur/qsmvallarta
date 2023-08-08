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
            title: "Room Type - K",
            bedrooms: "2",
            bathroom: "2",
            size: "120 m2 – 1291.7 ft2",
            gallery: [
                "/img/tower-5/K-1.webp",
                "/img/tower-5/K-UBICACIONES-NUEVO.webp",
            ],
            plan: "/img/tower-5/K.webp",
            interiorm: "105.5",
            interiorsqf: "1135.6",
            terracem: "14.5",
            terracesqf: "156",
        },
        {
            id: "2",
            title: "Room Type - M",
            bedrooms: "3",
            bathroom: "3.5",
            size: "189 m2 – 2034.4 ft2",
            gallery: [
                "/img/tower-5/M.webp",
                "/img/tower-5/M-UBICACIONES-NUEVO.webp",
            ],
            plan: "/img/tower-5/M_1.webp",
            interiorm: "135",
            interiorsqf: "1453.1",
            terracem: "54",
            terracesqf: "581.2",
        },
        {
            id: "3",
            title: "Room Type - N",
            bedrooms: "2",
            bathroom: "2",
            size: "164 m2 – 1765.3 ft2",
            gallery: [
                "/img/tower-5/N.webp",
                "/img/tower-5/N (1).webp",
            ],
            plan: "/img/tower-5/N (1)_1.webp",
            interiorm: "140.5",
            interiorsqf: "1512",
            terracem: "78.5",
            terracesqf: "845",
        },
        {
            id: "4",
            title: "Room Type - O",
            bedrooms: "2",
            bathroom: "2",
            size: "90 m2 – 968.7 ft2",
            gallery: [
                "/img/tower-5/O (1).webp",
                "/img/tower-5/O UBICACIONES.webp",
            ],
            plan: "/img/tower-5/O.webp",
            interiorm: "80",
            interiorsqf: "861.1",
            terracem: "10",
            terracesqf: "107.6",
        },
        {
            id: "5",
            title: "Room Type - P",
            bedrooms: "1",
            bathroom: "1",
            size: "55 m2 – 592 ft2",
            gallery: [
                "/img/tower-5/P (1).webp",
                "/img/tower-5/P UBICACIONES.webp",
            ],
            plan: "/img/tower-5/P(1).webp",
            interiorm: "48",
            interiorsqf: "516.7",
            terracem: "7",
            terracesqf: "75.3",
        },
        {
            id: "6",
            title: "Room Type - Q",
            bedrooms: "1",
            bathroom: "1",
            size: "59 m2 – 635 ft2",
            gallery: [
                "/img/tower-5/Q (1).webp",
                "/img/tower-5/Q UBICACIONES.webp",
            ],
            plan: "/img/tower-5/Q.webp",
            interiorm: "53",
            interiorsqf: "570.5",
            terracem: "6",
            terracesqf: "64.5",
        },
        {
            id: "7",
            title: "Room Type - R",
            bedrooms: "3",
            bathroom: "3 and 2 Half",
            size: "374.5 m2 – 4031 ft2",
            gallery: [
                "/img/tower-5/R2.webp",
                "/img/tower-5/R UBICACIONES.webp",
            ],
            plan: "/img/tower-5/PLANTA ALTA R.webp",
            interiorm: "217",
            interiorsqf: "2335.7",
            terracem: "157.5",
            terracesqf: "1695.3",
        },
        {
            id: "8",
            title: "Room Type - S",
            bedrooms: "3",
            bathroom: "3.5",
            size: "184 m2 – 1,980.6 ft2",
            gallery: [
                "/img/tower-5/S interior.webp",
                "/img/tower-5/S UBICACIONES.webp",
            ],
            plan: "/img/tower-5/S PLANTA BAJA (1).webp",
            interiorm: "172",
            interiorsqf: "1851.4",
            terracem: "12",
            terracesqf: "129.2",
        },
        {
            id: "9",
            title: "Room Type - S WITH ROOF",
            bedrooms: "3",
            bathroom: "3.5",
            size: "244 m2 – 2,626.4 ft2",
            gallery: [
                "/img/tower-5/S interior.webp",
                "/img/tower-5/S UBICACIONES.webp",
            ],
            plan: "/img/tower-5/S PLANTA BAJA (1).webp",
            interiorm: "172",
            interiorsqf: "1851.4",
            terracem: "72",
            terracesqf: "775",
        }
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

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
            title: "Unidad A",
            bedrooms: "2",
            bathroom: "2",
            size: "96 m² - 1033.33 Feet",
            gallery: [
                "/img/tower-3/unidad-A3.jpg",
                "/img/tower-3/unidad-A2-1-scaled.jpg",
                "/img/tower-3/unidad-A.png",
            ],
            plan: "/img/tower-3/PENTHOUSE.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "2",
            title: "Unidad B",
            bedrooms: "2",
            bathroom: "2",
            size: "134.7 m² - 1449.57 feet",
            gallery: [
                "/img/tower-3/Unidad-B2-1-scaled.jpg",
                "/img/tower-3/Unidad-B.png",
            ],
            plan: "/img/tower-3/Penthouse-standard-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "3",
            title: "Unidad C",
            bedrooms: "2",
            bathroom: "2",
            size: "128 m² - 1377.78 feet",
            gallery: [
                "/img/tower-3/Unidad-C-1-scaled.jpg",
                "/img/tower-3/Unidad-C2.png",
            ],
            plan: "/img/tower-3/apartment-corner-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "4",
            title: "Penthouse A",
            bedrooms: "3",
            bathroom: "4",
            size: "154.5 m² - 1663.01 feet",
            gallery: [
                "/img/tower-3/1-6.png",
                "/img/tower-3/7-1-scaled.jpg",
                "/img/tower-3/PH-TIPO-A-PLANTA-ALTA.png",
                "/img/tower-3/PH-TIPO-A-PLANTA-BAJA.png",
            ],
            plan: "/img/tower-3/apartment-standard-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "5",
            title: "Penthouse B",
            bedrooms: "3",
            bathroom: "3.5",
            size: "201.4 m² - 2167.85 Feet",
            gallery: [
                "/img/tower-3/2-4-1.png",
                "/img/tower-3/6-2-1-scaled.jpg",
                "/img/tower-3/PH-TIPO-B-PLANTA-ALTA.Denoiser.png",
                "/img/tower-3/PH-TIPO-B-PLANTA-BAJA.Denoiser.png",
            ],
            plan: "/img/tower-3/apartment-loft-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "6",
            title: "Penthouse C",
            bedrooms: "3",
            bathroom: "3.5",
            size: "193.2 m² - 2079.59 Feet",
            gallery: [
                "/img/tower-3/35-1-scaled.jpg",
                "/img/tower-3/15-1-scaled.jpg",
                "/img/tower-3/PH-TIPO-C-PLANTA-BAJA.Denoiser.png",
                "/img/tower-3/PH-TIPO-C-PLANTA-ALTA.png",
            ],
            plan: "/img/tower-3/apartment-standard-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
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

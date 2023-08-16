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
            title: "Condo Buzo",
            bedrooms: "2",
            bathroom: "4",
            size: "94.45 m2 - 1,016.65 Ft",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias.png",
                "/img/banderas-bay/type-1-copia.jpg",
                "/img/banderas-bay/buzo2.png",
                "/img/banderas-bay/buzo0.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias.png",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "2",
            title: "Condo Rivera",
            bedrooms: "3",
            bathroom: "3.5",
            size: "104.35 m2 - 1,123.21 Ft",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias-2.png",
                "/img/banderas-bay/type-2-copia.jpg",
                "/img/banderas-bay/rivera2.png",
                "/img/banderas-bay/rivera3.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias-2.png",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "3",
            title: "Garden 1 & 2",
            bedrooms: "4",
            bathroom: "4",
            size: "101 (136.5 m2 - 1,469.27 Ft) / 102 (150.5 m2 - 1,619.96 Ft)",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias-3.png",
                "/img/banderas-bay/1-piso-copia.jpg",
                "/img/banderas-bay/garden2.png",
                "/img/banderas-bay/garden3.png",
                "/img/banderas-bay/garden4.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias-3.png",
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

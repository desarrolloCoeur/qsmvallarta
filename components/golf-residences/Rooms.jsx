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
            title: "House",
            bedrooms: "4",
            bathroom: "4",
            // size: "94.45 m2 - 1,016.65 Ft",
            gallery: [
                "/img/golf-residences/golf-house-1.jpg",
                "/img/golf-residences/golf-house-2.jpg",
                "/img/golf-residences/golf-house-3.jpg",
                "/img/golf-residences/golf-house-4.jpg",
            ],
            plan: "/img/golf-residences/",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "2",
            title: "Department",
            bedrooms: "3",
            bathroom: "3.5",
            // size: "104.35 m2 - 1,123.21 Ft",
            gallery: [
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-01.jpg",
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-20.jpg",
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-16.jpg",
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-04.jpg",
                "/img/golf-residences/quinta-san-miguel-golf-dinning.jpg",
            ],
            plan: "/img/golf-residences/",
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

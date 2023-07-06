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
                // "/img/tower-4/roomA.webp",
                "/img/tower-4/roomA3.webp",
                "/img/tower-4/roomA2.webp",
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
                // "/img/tower-4/roomB.webp",
                "/img/tower-4/roomB2.webp",
                "/img/tower-4/roomB3.webp",
            ],
            plan: "/img/tower-4/roomB1.webp",
            interiorm: "146",
            interiorsqf: "1571",
            terracem: "248",
            terracesqf: "2670",
        },
        {
            id: "3",
            title: "Room Type - C",
            bedrooms: "3",
            bathroom: "3",
            size: "219 m2 – 2,357 ft2",
            gallery: [
                // "/img/tower-4/roomC.webp",
                "/img/tower-4/roomC2.webp",
                "/img/tower-4/roomC3.webp",
            ],
            plan: "/img/tower-4/roomC1.webp",
            interiorm: "140.5",
            interiorsqf: "1512",
            terracem: "78.5",
            terracesqf: "845",
        },
        {
            id: "4",
            title: "Room Type - D",
            bedrooms: "3",
            bathroom: "3",
            size: "235 m2 – 2,529 ft2",
            gallery: [
                // "/img/tower-4/roomD.webp",
                "/img/tower-4/roomD2.webp",
                "/img/tower-4/roomD3.webp",
            ],
            plan: "/img/tower-4/roomD1.webp",
            interiorm: "143",
            interiorsqf: "1540",
            terracem: "92",
            terracesqf: "990",
        },
        {
            id: "5",
            title: "Room Type - E",
            bedrooms: "3",
            bathroom: "3",
            size: "216 m2 – 2,325 ft2",
            gallery: [
                // "/img/tower-4/roomE.webp",
                "/img/tower-4/roomE2.webp",
                "/img/tower-4/roomE3.webp",
            ],
            plan: "/img/tower-4/roomE1.webp",
            interiorm: "119",
            interiorsqf: "1281",
            terracem: "104",
            terracesqf: "1120",
        },
        {
            id: "6",
            title: "Room Type - F",
            bedrooms: "3",
            bathroom: "3",
            size: "267 m2 – 2,874 ft2",
            gallery: [
                // "/img/tower-4/roomF.webp",
                "/img/tower-4/roomF2.webp",
                "/img/tower-4/roomF3.webp",
            ],
            plan: "/img/tower-4/roomF1.webp",
            interiorm: "143",
            interiorsqf: "1539",
            terracem: "123",
            terracesqf: "1324",
        },
        {
            id: "7",
            title: "Room Type - G",
            bedrooms: "1",
            bathroom: "1",
            size: "71 m2 – 764 ft2",
            gallery: [
                // "/img/tower-4/roomG.webp",
                "/img/tower-4/roomG3.webp",
                "/img/tower-4/roomG2.webp",
            ],
            plan: "/img/tower-4/roomG1.webp",
            interiorm: "53",
            interiorsqf: "570",
            terracem: "18",
            terracesqf: "194",
        },
        {
            id: "8",
            title: "Room Type - H",
            bedrooms: "1",
            bathroom: "1",
            size: "60 m2 – 645 ft2",
            gallery: [
                // "/img/tower-4/roomH.webp",
                "/img/tower-4/roomH3.webp",
                "/img/tower-4/roomH2.webp",
            ],
            plan: "/img/tower-4/roomH1.webp",
            interiorm: "54",
            interiorsqf: "581",
            terracem: "6",
            terracesqf: "64",
        },
        {
            id: "9",
            title: "Room Type - I",
            bedrooms: "3",
            bathroom: "3",
            size: "174 m2 – 1873 ft2",
            gallery: [
                // "/img/tower-4/roomI.webp",
                "/img/tower-4/roomI3.webp",
                "/img/tower-4/roomI2.webp",
            ],
            plan: "/img/tower-4/roomI1.webp",
            interiorm: "142",
            interiorsqf: "1528",
            terracem: "32",
            terracesqf: "344",
        },
        {
            id: "10",
            title: "Room Type - J",
            bedrooms: "2",
            bathroom: "2",
            size: "135 m2 – 1,453 ft2",
            gallery: [
                // "/img/tower-4/roomJ.webp",
                "/img/tower-4/roomJ2.webp",
                "/img/tower-4/roomJ3.webp",
            ],
            plan: "/img/tower-4/roomJ1.webp",
            interiorm: "117.5",
            interiorsqf: "1265",
            terracem: "17.5",
            terracesqf: "188",
        },
        {
            id: "11",
            title: "Room Type - K",
            bedrooms: "2",
            bathroom: "2",
            size: "106 m2 – 1141 ft2",
            gallery: [
                // "/img/tower-4/roomK.webp",
                "/img/tower-4/roomK3.webp",
                "/img/tower-4/roomK2.webp",
            ],
            plan: "/img/tower-4/roomK1.webp",
            interiorm: "95.6",
            interiorsqf: "1029",
            terracem: "10.4",
            terracesqf: "112",
        },
        {
            id: "12",
            title: "Room Type - L",
            bedrooms: "2",
            bathroom: "2",
            size: "160 m2 – 1,722 ft2",
            gallery: [
                // "/img/tower-4/roomL.webp",
                "/img/tower-4/roomL2.webp",
                "/img/tower-4/roomL3.webp",
            ],
            plan: "/img/tower-4/roomL1.webp",
            interiorm: "118",
            interiorsqf: "1270",
            terracem: "42",
            terracesqf: "452",
        },
        {
            id: "13",
            title: "Room Type - PH G",
            bedrooms: "1",
            bathroom: "2.5",
            size: "150 m2 – 1616 ft2",
            gallery: [
                // "/img/tower-4/roomPHG.webp",
                "/img/tower-4/roomPHG2.webp",
                "/img/tower-4/roomPHG1.webp",
            ],
            plan: "/img/tower-4/roomPHG3.webp",
            interiorm: "84",
            interiorsqf: "904",
            terracem: "18",
            terracesqf: "193",
            roofmp: "48.2",
            roofsqf: "519",
        },
        {
            id: "14",
            title: "Room Type - PH H",
            bedrooms: "1",
            bathroom: "2.5",
            size: "152 m2 – 1636 ft2",
            gallery: [
                // "/img/tower-4/roomPHH.webp",
                "/img/tower-4/roomPHH1.webp",
                "/img/tower-4/roomPHH2.webp",
            ],
            plan:"/img/tower-4/roomPHH3.webp",
            interiorm: "90",
            interiorsqf: "968.75",
            terracem: "6",
            terracesqf: "64.6",
            roofmp: "56",
            roofsqf: "602",
        },
        {
            id: "15",
            title: "Room Type - PH I",
            bedrooms: "3",
            bathroom: "3.5",
            size: "408 m2 – 4391 ft2",
            gallery: [
                // "/img/tower-4/roomPHI.webp",
                "/img/tower-4/roomPHI1.webp",
                "/img/tower-4/roomPHI2.webp",
            ],
            plan:"/img/tower-4/roomPHI3.webp",
            interiorm: "232",
            interiorsqf: "2497",
            terracem: "32",
            terracesqf: "344",
            roofmp: "144",
            roofsqf: "1550",
        },
        {
            id: "16",
            title: "Room Type - PH J",
            bedrooms: "3",
            bathroom: "4.5",
            size: "328 m2 – 3531 ft2",
            gallery: [
                // "/img/tower-4/roomPHJ.webp",
                "/img/tower-4/roomPHJ1.webp",
                "/img/tower-4/roomPHJ2.webp",
            ],
            plan:"/img/tower-4/roomPHJ3.webp",            
            interiorm: "193.5",
            interiorsqf: "2083",
            terracem: "17.5",
            terracesqf: "188",
            roofmp: "117",
            roofsqf: "1260",
        },
        {
            id: "17",
            title: "Room Type - PH K 605",
            bedrooms: "3",
            bathroom: "3.5",
            size: "265 m2 – 2855 ft2",
            gallery: [
                // "/img/tower-4/roomPHK605.webp",
                "/img/tower-4/roomPHK605-1.webp",
                "/img/tower-4/roomPHK605-2.webp",
            ],
            plan:"/img/tower-4/roomPHK605-3.webp",       
            interiorm: "159.25",
            interiorsqf: "1714",
            terracem: "10.4",
            terracesqf: "112",
            roofmp: "95.6",
            roofsqf: "1029",
        },
        {
            id: "18",
            title: "Room Type - PH K 606",
            bedrooms: "3",
            bathroom: "3.5",
            size: "268.4 m2 – 2888 ft2",
            gallery: [
                // "/img/tower-4/roomPHK606.webp",
                "/img/tower-4/roomPHK606-2.webp",
                "/img/tower-4/roomPHK606-1.webp",
            ],
            plan:"/img/tower-4/roomPHK606-3.webp",            
            interiorm: "162.6",
            interiorsqf: "1750",
            terracem: "10.4",
            terracesqf: "112",
            roofmp: "95.4",
            roofsqf: "1026",
        },
        {
            id: "19",
            title: "Room Type - PH K 607",
            bedrooms: "3",
            bathroom: "3.5",
            size: "268 m2 – 2884 ft2",
            gallery: [
                // "/img/tower-4/roomPHK607.webp",
                "/img/tower-4/roomPHK607-1.webp",
                "/img/tower-4/roomPHK607-2.webp",
            ],
            plan:"/img/tower-4/roomPHK607-3.webp",
            interiorm: "162",
            interiorsqf: "1743.75",
            terracem: "10.4",
            terracesqf: "112",
            roofmp: "95.6",
            roofsqf: "1029",
        },
        {
            id: "20",
            title: "Room Type - PH L",
            bedrooms: "3",
            bathroom: "3.5",
            size: "335 m2 – 3606 ft2.",
            gallery: [
                // "/img/tower-4/roomPHL.webp",
                "/img/tower-4/roomPHL1.webp",
                "/img/tower-4/roomPHL2.webp",
            ],
            plan:"/img/tower-4/roomPHL3.webp",
            interiorm: "195",
            interiorsqf: "2099",
            terracem: "45",
            terracesqf: "452",
            roofmp: "98",
            roofsqf: "1055",
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

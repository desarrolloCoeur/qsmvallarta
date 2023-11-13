// *********
"use client"
import { useState, useEffect } from "react";
import ApartmentInventory from "@/components/ApartmentInventory";
import Popup from "@/components/Popup";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';

import Image from 'next/image';
import KeyLocations from '@/components/ui/KeyLocations';
import BuildingHero from '@/components/ui/BuildingHero'
import RoomSwiper from '@/components/ui/RoomSwiper';
import {
    FaSwimmingPool,
    FaTableTennis,
    FaStoreAlt,
    FaShower,
    FaGlassMartini,
} from "react-icons/fa";
import ContacUs from '@/components/ContacUs';


const Page = () => {
    // nuevo
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [selectedUnitType, setSelectedUnitType] = useState(null)
    const [isPopupOpen, setisPopupOpen] = useState(false);
    const [selectePrice ,setSelectedPrice] = useState("discount");

    const handlePriceOption = (option) => {
        setSelectedPrice(option);
        console.log(option);
    }

    const openPopup = (unit) => {
        setSelectedUnit(unit); // Establece la unidad seleccionada

        // Busca el objeto correspondiente en el array `data`
        const matchingRoomInData = data.find(room => room.title === unit.unitType);

        // Busca el objeto correspondiente en el array `dataPenthouses` si no se encuentra en `data`
        const matchingRoomInPenthouses = dataPenthouses.find(room => room.title === unit.unitType);

        if (matchingRoomInData) {
            setSelectedUnitType(matchingRoomInData);
        } else if (matchingRoomInPenthouses) {
            setSelectedUnitType(matchingRoomInPenthouses);
        } else {
            setSelectedUnitType(null); // Si no se encuentra ninguna correspondencia, establece null
        }
        setisPopupOpen(true);
    }

    const closePopup = () => {
        setSelectedUnit(null);
        setisPopupOpen(false);
    }

    const getColorStatus = (unitStatus) => {
        switch(unitStatus){
            case "available":
                return "bg-green-500";
            case "on-hold":
                return "bg-yellow-500";
            case "sold":
                return "bg-red-500";
        }
    }
    function formattedPrice(price, percentage, secondPercentage) {
        // Verificar si percentage es un número válido
        if (typeof percentage === 'number') {
            price *= percentage; // Calcular el precio con el porcentaje
        }

        if (typeof secondPercentage === 'number') {
            price *= secondPercentage; // Aplicar el segundo porcentaje
        }
        
        // Formatear el precio como moneda MXN con comas como separadores de miles
        const formattedPriceValue = new Intl.NumberFormat('en-US').format(price);
        return formattedPriceValue;
      }
// *******


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
        }
    ];

    const dataPenthouses = [
        {
            id: "7",
            title: "Room Type - R PH CORNER",
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
            title: "Room Type - S PH CENTRAL",
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
            title: "Room Type - S PH ROOF",
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
        },
    ];

    // nuevo 
    const units = [
        {
            unit : "101",
            unitType : "Room Type - M",
            level: "1",
            unitStatus : "available",
            unitPrice : "18672000",
            points: "1165 540,1285 590,1080 665,1000 640,1000 595",
            textPoints : [1120,610]
        },
        {
            unit : "102",
            unitType : "Room Type - K",
            level: "1",
            unitStatus : "available",
            unitPrice : "11020000",
            points: "885 625,885 680,950 700, 1080 665, 1000 640, 1000 595",
            textPoints : [950,670]
        },
        {
            unit : "103",
            unitType : "Room Type - K",
            level: "1",
            unitStatus : "available",
            unitPrice : "11020000",
            points: "540 745,650 705,750 740, 750 770, 620 815, 540 790",
            textPoints : [620,770]
        },
        {
            unit : "104",
            unitType : "Room Type - M",
            level: "1",
            unitStatus : "available",
            unitPrice : "25008000",
            points: "410 787, 540 745, 540 790, 620 815, 410 880, 90 775, 90 745, 185 712",
            textPoints : [320,820]
        },
        {
            unit : "201",
            unitType : "Room Type - N",
            level: "2",
            unitStatus : "available",
            unitPrice : "12320000",
            points: "1115 492, 1165 510, 1165 540, 1038 583, 1035 515",
            textPoints : [1070,540]
        },
        {
            unit : "202",
            unitType : "Room Type - O",
            level: "2",
            unitStatus : "available",
            unitPrice : "7560000",
            points: "1035 515, 1038 583, 930 613, 930 545",
            textPoints : [960,570]
        },
        {
            unit : "203",
            unitType : "Room Type - P",
            level: "2",
            unitStatus : "available",
            unitPrice : "4620000",
            points: "930 545, 880 560, 880 625, 930 615",
            textPoints : [880,600]
        },
        {
            unit : "204",
            unitType : "Room Type - Q",
            level: "2",
            unitStatus : "available",
            unitPrice : "4956000",
            points: "880 560, 880 625, 820 645, 820 580",
            textPoints : [820,610]
        },
        {
            unit : "205",
            unitType : "Room Type - Q",
            level: "2",
            unitStatus : "available",
            unitPrice : "4956000",
            points: "770 600, 770 665, 820 645, 820 580",
            textPoints : [770,630]
        },
        {
            unit : "206",
            unitType : "Room Type - Q",
            level: "2",
            unitStatus : "available",
            unitPrice : "4956000",
            points: "770 600, 770 665, 700 690, 700 625",
            textPoints : [710,650]
        },
        {
            unit : "207",
            unitType : "Room Type - Q",
            level: "2",
            unitStatus : "available",
            unitPrice : "4956000",
            points: " 700 690, 700 625, 660 635, 660 700",
            textPoints : [660,670]
        },
        {
            unit : "208",
            unitType : "Room Type - P",
            level: "2",
            unitStatus : "available",
            unitPrice : "4620000",
            points: "590 725, 590 660, 660 635, 660 700",
            textPoints : [600,690]
        },
        {
            unit : "209",
            unitType : "Room Type - O",
            level: "2",
            unitStatus : "available",
            unitPrice : "7560000",
            points: "500 690, 500 758, 590 725, 590 660",
            textPoints : [520,720]
        },
        {
            unit : "210",
            unitType : "Room Type - N",
            level: "2",
            unitStatus : "available",
            unitPrice : "12320000",
            points: "410 720, 500 690, 500 758, 410 788, 140 700, 140 685, 190 680, 190 650",
            textPoints : [260,715]
        },
        {
            unit : "301",
            unitType : "Room Type - N",
            level: "3",
            unitStatus : "available",
            unitPrice : "12420000",
            points: "1035 515, 1035 450, 1115 425, 1165 445, 1165 480",
            textPoints : [1070,470]
        },
        {
            unit : "302",
            unitType : "Room Type - O",
            level: "3",
            unitStatus : "available",
            unitPrice : "7660000",
            points: "1035 515, 930 545, 930 480, 1035 450",
            textPoints : [960,500]
        },
        {
            unit : "303",
            unitType : "Room Type - P",
            level: "3",
            unitStatus : "available",
            unitPrice : "4720000",
            points: "880 500, 930 480, 930 545, 880 560",
            textPoints : [880,530]
        },
        {
            unit : "304",
            unitType : "Room Type - Q",
            level: "3",
            unitStatus : "available",
            unitPrice : "5056000",
            points: "880 500, 880 560, 820 580, 820 515",
            textPoints : [820,550]
        },
        {
            unit : "305",
            unitType : "Room Type - Q",
            level: "3",
            unitStatus : "sold",
            unitPrice : "5056000",
            points: "820 580, 820 515, 770 530, 770 600",
            textPoints : [770,570]
        },
        {
            unit : "306",
            unitType : "Room Type - K",
            level: "3",
            unitStatus : "available",
            unitPrice : "8900000",
            points: "650 570, 770 530, 770 600, 650 640",
            textPoints : [690,590]
        },
        {
            unit : "307",
            unitType : "Room Type - K",
            level: "3",
            unitStatus : "available",
            unitPrice : "8900000",
            points: "650 570, 650 640, 540 680, 540 610",
            textPoints : [580,630]
        },
        {
            unit : "308",
            unitType : "Room Type - M",
            level: "3",
            unitStatus : "sold",
            unitPrice : "15120000",
            points: "410 655, 540 610, 540 680, 410 720,  140 635, 140 620,  190 615, 190 585",
            textPoints : [260,655]
        },
        {
            unit : "401",
            unitType : "Room Type - N",
            level: "4",
            unitStatus : "available",
            unitPrice : "12520000",
            points: " 1035 450, 1035 385, 1115 360,  1165 380, 1165 410",
            textPoints : [1070,400]
        },
        {
            unit : "402",
            unitType : "Room Type - O",
            level: "4",
            unitStatus : "available",
            unitPrice : "7760000",
            points: "930 480, 1035 450, 1035 385, 930 410",
            textPoints : [960,435]
        },
        {
            unit : "403",
            unitType : "Room Type - P",
            level: "4",
            unitStatus : "available",
            unitPrice : "4820000",
            points: "880 430, 880 500, 930 480, 930 415",
            textPoints : [880,460]
        },
        {
            unit : "404",
            unitType : "Room Type - K",
            level: "4",
            unitStatus : "available",
            unitPrice : "8950000",
            points: "880 430, 770 465, 770 530, 880 500",
            textPoints : [800,490]
        },
        {
            unit : "405",
            unitType : "Room Type - K",
            level: "4",
            unitStatus : "available",
            unitPrice : "8950000",
            points: "770 465, 650 505, 650 570, 770 530",
            textPoints : [690,520]
        },
        {
            unit : "406",
            unitType : "Room Type - P",
            level: "4",
            unitStatus : "available",
            unitPrice : "4820000",
            points: "590 593, 590 525, 650 500, 650 570",
            textPoints : [590,560]
        },
        {
            unit : "407",
            unitType : "Room Type - O",
            level: "4",
            unitStatus : "on-hold",
            unitPrice : "7760000",
            points: "500 560, 500 625, 590 593, 590 525",
            textPoints : [520,580]
        },
        {
            unit : "408",
            unitType : "Room Type - N",
            level: "4",
            unitStatus : "available",
            unitPrice : "12520000",
            points: " 410 590, 500 560, 500 625, 410 655, 140 570, 140 555, 190 545, 190 515",
            textPoints : [260,585]
        },
        {
            unit : "501",
            unitType : "Room Type - M",
            level: "5",
            unitStatus : "available",
            unitPrice : "15220000",
            points: "1000 393, 1000 325, 1115 290, 1165 310, 1165 345",
            textPoints : [1070,335]
        },
        {
            unit : "502",
            unitType : "Room Type - K",
            level: "5",
            unitStatus : "available",
            unitPrice : "8990000",
            points: "1000 393, 1000 325, 880 360, 880 430",
            textPoints : [920,375]
        },
        {
            unit : "503",
            unitType : "Room Type - K",
            level: "5",
            unitStatus : "available",
            unitPrice : "8990000",
            points: "880 360, 880 430, 770 465, 770 395",
            textPoints : [800,420]
        },
        {
            unit : "504",
            unitType : "Room Type - K",
            level: "5",
            unitStatus : "sold",
            unitPrice : "8990000",
            points: "770 465, 770 395, 650 435, 650 505",
            textPoints : [690,450]
        },
        {
            unit : "505",
            unitType : "Room Type - k",
            level: "5",
            unitStatus : "available",
            unitPrice : "8990000",
            points: " 650 435, 650 505, 540 545, 540 475",
            textPoints : [560,500]
        },
        {
            unit : "506",
            unitType : "Room Type - M",
            level: "5",
            unitStatus : "available",
            unitPrice : "15220000",
            points: "540 475, 540 545, 410 590, 140 500, 140 480, 190 480, 190 450, 410 520",
            textPoints : [260,515]
        },
        {
            unit : "601",
            unitType : "Room Type - R PH CORNER",
            level: "6",
            unitStatus : "available",
            unitPrice : "20510000",
            points: "980 330, 980 120, 820 40, 910 10, 1170 100, 1170 140, 1120 150, 1120 230, 1170 250, 1170 275",
            textPoints : [1030,230]
        },
        {
            unit : "602",
            unitType : "Room Type - S PH ROOF",
            level: "6",
            unitStatus : "available",
            unitPrice : "16640000",
            points: "880 360, 880 220, 910 210, 910 120, 740 70, 820 40, 980 120, 980 330",
            textPoints : [910,275]
        },
        {
            unit : "603",
            unitType : "Room Type - S PH CENTRAL",
            level: "6",
            unitStatus : "available",
            unitPrice : "14720000",
            points: "880 360, 770 395, 770 255, 880 220",
            textPoints : [800,320]
        },
        {
            unit : "604",
            unitType : "Room Type - S PH CENTRAL",
            level: "6",
            unitStatus : "available",
            unitPrice : "14720000",
            points: "770 395, 770 255, 650 295, 650 435",
            textPoints : [690,350]
        },
        {
            unit : "605",
            unitType : "Room Type - S PH ROOF",
            level: "6",
            unitStatus : "available",
            unitPrice : "16640000",
            points: "650 295, 650 435, 540 475, 540 330, 510 310, 510 260, 370 200, 420 190, 580 250, 580 290",
            textPoints : [560,400]
        },
        {
            unit : "606",
            unitType : "Room Type - R PH CORNER",
            level: "6",
            unitStatus : "available",
            unitPrice : "25000000", 
            points: "370 200, 510 260, 510 310, 540 330, 540 475, 410 520, 150 440, 150 410, 190 400, 190 270",
            textPoints : [300,400]
        }
    ]

    


    return (
        <>
            <BuildingHero background="/img/tower-4/tower4.webp" title="Tower 5"/>

            <div className='container w-11/12 mx-auto mt-16'>
                <div>
                    <h1 className="text-center text-5xl">
                        THE PERFECT PLACE FOR RELAXATION, FEATURING BREATHTAKING VIEWS, CONVIENCE AND TOP AMENITIES.
                    </h1>
                    <div className="mx-auto flex justify-center flex-col md:flex-row gap-5 mt-16">
                        <div className="text-center  md:w-1/2 max-w-[500px] mx-auto">
                            <p className="italic">
                            Our new tower is the perfect place for relaxation, featuring breathtaking views,
                            convenience and top amenities.
                            </p>
                            <div>
                                <ul className="flex flex-wrap justify-center mt-7 mb-10 items-center">
                                    <li className="w-1/2 md:w-1/3 flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaSwimmingPool className="text-4xl text-[#212529]"/>
                                        <p>Roof Top Pool</p>
                                    </li>
                                    <li className="w-1/2 md:w-1/3 flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaGlassMartini className="text-4xl text-[#212529]"/>
                                        <p>Restaurant Bar</p>
                                    </li>
                                    <li className="w-1/2 md:w-1/3 flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaTableTennis className="text-4xl text-[#212529]"/>
                                        <p>Raquet Club</p>
                                    </li>
                                    <li className="w-1/2 md:w-1/3 flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaShower className="text-4xl text-[#212529]"/>
                                        <p>Showers & Toilets</p>
                                    </li>
                                    <li className="w-1/2 md:w-1/3 flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaStoreAlt className="text-4xl text-[#212529]"/>
                                        <p>Commercial area</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/img/5.webp" alt="" height={500} width={600} className="block mx-auto"/>
                        </div>
                    </div>
                </div> 
                <KeyLocations />
                <RoomSwiper roomData={data} title="Our Room Types"/>
                <RoomSwiper roomData={dataPenthouses} title="Our Penthouses"/>


{/* ************** */}
                <div className="mt-20">
                    <h2>Inventory</h2>
                    <div className="relative">
                        <Image src="/img/tower-5/T5.webp" alt="Tower 5 - QSM" width={900} height={700} className="w-full"/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 right-0 bottom-0" viewBox="0 0 1600 900">
                            {
                                units.map((unit,i) => ((
                                    <ApartmentInventory key={i} status={unit.unitStatus} points={unit.points} apartmentNumber={unit.unit} x={unit.textPoints[0]} y={unit.textPoints[1]} onPopupOpen={() => openPopup(unit)}/>
                                )))
                            }
                        </svg>
                    </div>
                </div>
{/* ************* */}

                <ContacUs/>
            </div>




{/********************** */}
<Popup isOpen={isPopupOpen} onClose={closePopup}>
                {selectedUnit && selectedUnitType && ( // Comprueba si hay una unidad seleccionada
                <>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                        <h3>Unit {selectedUnit.unit} Details</h3>
                        <div className="flex items-center gap-1 flex-wrap">
                            <p className={`inline-block uppercase font-bold p-1 rounded-md text-white my-2 ${getColorStatus(selectedUnit.unitStatus)}`}>{selectedUnit.unitStatus}</p>
                            <p className="font-bold bg-main text-white p-1 my-2 rounded-md uppercase">{selectedUnit.unitType}</p>
                        </div>
                        <p><strong>Bedroom(s):</strong> {selectedUnitType.bedrooms}</p>
                        <p><strong>Bathroom(s):</strong> {selectedUnitType.bathroom}</p>
                        <p><strong>Level:</strong> {selectedUnit.level}</p>
                        <p><strong>Tower:</strong> 5</p>
                        <p><strong>Size:</strong> {selectedUnitType.size}</p>

                        <table className="flex items-center gap-2 border-collapse">
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 py-1 px-3"></td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        M2
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        SQF
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 py-1 px-3">
                                        Interior
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.interiorm}
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.interiorsqf}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 py-1 px-3">
                                        Terrace
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.terracem}
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.terracesqf}
                                    </td>
                                </tr>
                                { selectedUnitType.roofmp && (
                                    <>
                                                                     <tr>
                                    <td className="border border-slate-300 py-1 px-3">
                                        Roof Top
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.roofmp}
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.roofsqf}
                                    </td>
                                </tr>
                                    </>
                                )


                                }
                            </tbody>
                        </table>
                        <div className="mt-5">
                        { selectedUnit.unitStatus === "available" && (
                                <>
                                <h3>Price Plans</h3>
                            <div>
                                <button className={`font-bold px-2 py-1 rounded-md ${selectePrice == "discount" ? "text-white bg-main" : null}`} onClick={() => handlePriceOption('discount')}>5% Discount</button>
                                <button className={`font-bold px-2 py-1 rounded-md ${selectePrice == "list-price" ? "text-white bg-main" : null}`} onClick={() => handlePriceOption('list-price')}>List Price</button>
                                <div>
                                    <table className={`table-auto border my-4 ${selectePrice == "list-price" ? null : "hidden"}`}>
                                        <tr>
                                            <td className="border p-2 text-center bg-main text-white" colSpan={2}>
                                                <h5 className="uppercase font-semibold">List Price</h5>
                                                <p className="text-lg font-semibold mb-0 text-white">{`$${formattedPrice(selectedUnit.unitPrice)} MXN`}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Down Payment (35%)</h5>
                                                <small>Payment at signature of the purchase-sale contract</small>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.35)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Monthly Payments (35%)</h5>
                                                <small>In monthly payments during construction, no interest</small>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.35)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Closing Payment (30%)</h5>
                                                <small>In monthly payments during construction, no interest</small>
                                            </td>
                                            <td className="borde p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.30)} MXN`}
                                            </td>
                                        </tr>
                                    </table>
                                    <table className={`table-auto border my-4 ${selectePrice == "discount" ? null : "hidden"}`}>
                                        <tr>
                                            <td className="border p-2 text-center bg-main text-white" colSpan={2}>
                                                <h5 className="uppercase font-semibold">5% Discount Price</h5>
                                                <p className="text-lg font-semibold mb-0 text-white line-through">{`$${formattedPrice(selectedUnit.unitPrice)} MXN`}</p>
                                                <p className="text-lg font-semibold mb-0 text-white">{`$${formattedPrice(selectedUnit.unitPrice, 0.95)} MXN`}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Discount(5%)</h5>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.05)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Down Payment (35%)</h5>
                                                <small>Payment at signature of the purchase-sale contract</small>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.95,0.35)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Closing Payment (65%)</h5>
                                                <small>In monthly payments during construction, no interest</small>
                                            </td>
                                            <td className="borde p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.95,0.65)} MXN`}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>  
                            <ul className="text-sm list-disc list-inside">
                                <li>Prices, discounts and payment plans are subject to modifications without previous notice.</li>
                                <li>The Purchase-Sale agreement must be signed within 10 days after signing of the Purchase Request</li>
                                <li>If the Purchase-Sale agreement is not signed the property will be released and Back on the Market</li>
                            </ul>


                                </>
                                )
                            
                            }

                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3>Plan</h3>
                        <Image src={selectedUnitType.plan} width={500} height={300} alt={selectedUnitType.title}/>

                        <div className="mt-5">
                            <h3>Gallery</h3>
                            <Swiper>
                                <SwiperSlide>
                                    <Image src={selectedUnitType.gallery[0]} width={500} height={300} alt={selectedUnitType.title} className="h-auto"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={selectedUnitType.gallery[1]} width={500} height={300} alt={selectedUnitType.title} className="h-auto"/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>

                </>
                )}
            </Popup>


            {/* *************** */}
        </>
    )
}

export default Page
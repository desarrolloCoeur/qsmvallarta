"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FaSwimmingPool,
    FaStoreAlt,
    FaShower,
    FaGlassMartini,
    FaHome,
    FaShieldAlt,
    FaParking,
    FaConciergeBell,
} from "react-icons/fa";

import { FaTurnDown } from "react-icons/fa6";
import ContacUs from "@/components/ContacUs";
import BuildingHero from "@/components/ui/BuildingHero";
import RoomSwiper from "@/components/ui/RoomSwiper";
import ApartmentInventory from "@/components/ApartmentInventory";
import Popup from "@/components/Popup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Page = () => {
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [selectedUnitType, setSelectedUnitType] = useState(null);
    const [isPopupOpen, setisPopupOpen] = useState(false);
    const [selectePrice, setSelectedPrice] = useState("discount");

    const handlePriceOption = (option) => {
        setSelectedPrice(option);
        console.log(option);
    };

    const openPopup = (unit) => {
        setSelectedUnit(unit); // Establece la unidad seleccionada

        // Busca el objeto correspondiente en el array `data`
        const matchingRoomInData = dataRooms.find(
            (room) => room.title === unit.unitType
        );

        // Busca el objeto correspondiente en el array `dataPenthouses` si no se encuentra en `data`
        const matchingRoomInPenthouses = dataPenthouses.find(
            (room) => room.title === unit.unitType
        );

        if (matchingRoomInData) {
            setSelectedUnitType(matchingRoomInData);
        } else if (matchingRoomInPenthouses) {
            setSelectedUnitType(matchingRoomInPenthouses);
        } else {
            setSelectedUnitType(null); // Si no se encuentra ninguna correspondencia, establece null
        }
        setisPopupOpen(true);
    };

    const closePopup = () => {
        setSelectedUnit(null);
        setisPopupOpen(false);
    };

    const getColorStatus = (unitStatus) => {
        switch (unitStatus) {
            case "available":
                return "bg-green-500";
            case "on-hold":
                return "bg-yellow-500";
            case "sold":
                return "bg-red-500";
        }
    };
    function formattedPrice(price, percentage, secondPercentage) {
        // Verificar si percentage es un número válido
        if (typeof percentage === "number") {
            price *= percentage; // Calcular el precio con el porcentaje
        }

        if (typeof secondPercentage === "number") {
            price *= secondPercentage; // Aplicar el segundo porcentaje
        }

        // Formatear el precio como moneda MXN con comas como separadores de miles
        const formattedPriceValue = new Intl.NumberFormat("en-US").format(
            price
        );
        return formattedPriceValue;
    }
    const dataRooms = [
        {
            id: "1",
            title: "Room Type - A",
            bedrooms: "3",
            bathroom: "3",
            size: "172 m2 - 1851 ft2",
            gallery: ["/img/tower-garden/TERMINACION-1-FINAL-A.webp"],
            plan: "/img/tower-garden/PLANTA-TERMINACION-1-A.webp",
            interiorm: "142",
            interiorsqf: "1528.48",
            terracem: "30",
            terracesqf: "322.91",
        },
        {
            id: "2",
            title: "Room Type - B",
            bedrooms: "2",
            bathroom: "2",
            size: "108 m2 – 1205.5 ft2",
            gallery: ["/img/tower-garden/roomB-3.webp"],
            plan: "/img/tower-garden/roomB-2.webp",
            interiorm: "94",
            interiorsqf: "1011.81",
            terracem: "14",
            terracesqf: "150.69",
        },
        {
            id: "3",
            title: "Room Type - C",
            bedrooms: "3",
            bathroom: "3",
            size: "180 m2 – 1,367 ft2",
            gallery: ["/img/tower-garden/TERMINACION-3-C.webp"],
            plan: "/img/tower-garden/PLANTA-TERMINACION-3-C.webp",
            interiorm: "126",
            interiorsqf: "1356.25",
            terracem: "54",
            terracesqf: "581.25",
        },
        {
            id: "6",
            title: "Room Type - F",
            bedrooms: "3",
            bathroom: "3",
            size: "157.5 m2 – 1,695 ft2",
            gallery: ["/img/tower-garden/roomF-4.webp"],
            plan: "/img/tower-garden/roomF-3.webp",
            interiorm: "145",
            interiorsqf: "1560.77",
            terracem: "12.5",
            terracesqf: "134.54",
        },
    ];

    const dataPenthouses = [
        {
            id: "4",
            title: "Room Type - D",
            bedrooms: "3",
            bathroom: "3.5",
            size: "242.2 m2 – 2,607 ft2",
            gallery: [
                "/img/tower-garden/roomD-6.webp",
                "/img/tower-garden/roomD-7.webp",
            ],
            plan: "/img/tower-garden/roomD-5.webp",
            interiorm: "159",
            interiorsqf: "1711.46",
            terracem: "83.2",
            terracesqf: "895.55",
        },
        {
            id: "5",
            title: "Room Type - E",
            bedrooms: "3",
            bathroom: "3.5",
            size: "225 m2 – 2,422 ft2",
            plan: "/img/tower-garden/roomE-5.webp",
            gallery: [
                "/img/tower-garden/roomE-6.webp",
                "/img/tower-garden/roomE-7.webp",
            ],
            interiorm: "162.5",
            interiorsqf: "1749.13",
            terracem: "62.5",
            terracesqf: "672.74",
        },
        {
            id: "7",
            title: "Room Type - G",
            bedrooms: "3",
            bathroom: "3.5",
            size: "299.5 m2 – 3,223 ft2",
            plan: "/img/tower-garden/roomG-5.webp",
            gallery: [
                "/img/tower-garden/roomG-6.webp",
                "/img/tower-garden/roomG-7.webp",
            ],
            interiorm: "178.5",
            interiorsqf: "1921.358",
            terracem: "121",
            terracesqf: "1302.43",
        },
    ];

    const units = [
        {
            unit: "203",
            unitType: "Room Type - C",
            level: "2",
            unitStatus: "sold",
            unitPrice: "13680000",
            points: "460,610 460,740 795,740 795,610",
            textPoints: [610, 685],
        },
        {
            unit: "202",
            unitType: "Room Type - B",
            level: "2",
            unitStatus: "sold",
            unitPrice: "8208000",
            points: "1135,610 1135,740 795,740 795,610",
            textPoints: [950, 685],
        },
        {
            unit: "201",
            unitType: "Room Type - A",
            level: "2",
            unitStatus: "sold",
            unitPrice: "13072000",
            points: "1430,610 1430,740 1135,740 1135,610",
            textPoints: [1250, 685],
        },
        {
            unit: "303",
            unitType: "Room Type - C",
            level: "3",
            unitStatus: "available",
            unitPrice: "13780000",
            points: "460,490 460,610 795,610 795,490",
            textPoints: [610, 565],
        },
        {
            unit: "302",
            unitType: "Room Type - B",
            level: "3",
            unitStatus: "sold",
            unitPrice: "8308000",
            points: "1135,490 1135,610 795,610 795,490",
            textPoints: [950, 565],
        },
        {
            unit: "301",
            unitType: "Room Type - A",
            level: "3",
            unitStatus: "available",
            unitPrice: "13172000",
            points: "1430,490 1430,610 1135,610 1135,490",
            textPoints: [1250, 565],
        },
        {
            unit: "401",
            unitType: "Room Type - D",
            level: "4",
            unitStatus: "available",
            unitPrice: "13886000",
            points: "360,490 360,230 90,230 90,490",
            textPoints: [210, 370],
        },
        {
            unit: "404",
            unitType: "Room Type - G",
            level: "4",
            unitStatus: "available",
            unitPrice: "16642000",
            points: "460,490 460,230 705,230 705,490",
            textPoints: [570, 370],
        },
        {
            unit: "403",
            unitType: "Room Type - F",
            level: "4",
            unitStatus: "available",
            unitPrice: "11110920",
            points: "1010,490 1010,230 705,230 705,490",
            textPoints: [830, 370],
        },

        {
            unit: "402",
            unitType: "Room Type - E",
            level: "4",
            unitStatus: "available",
            unitPrice: "13490090",
            points: "1430,490 1430,230 1010,230 1010,490",
            textPoints: [1190, 370],
        },
    ];

    return (
        <>
            <BuildingHero
                background="/img/tower-garden/VISTA-FRENTE-S.webp"
                title="Garden"
            />
            <div className="container w-11/12 mx-auto mt-16">
                <div>
                    <h1 className="text-center text-5xl">
                        INCREDIBLE VIEWS, COMMODITY AND THE BEST AMENITIES.
                    </h1>
                    <div className="mx-auto flex justify-center flex-col md:flex-row gap-5 mt-16">
                        <div className="text-center  md:w-1/2 max-w-[500px] mx-auto">
                            <p className="italic">
                                Our tower offers incredible views, commodity and
                                the best amenities:
                            </p>
                            <div>
                                <ul className="grid grid-cols-2 md:grid-cols-3 justify-between gap-1 mt-7 mb-10">
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaHome className="text-4xl text-[#212529]" />
                                        <p>Roof Top</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaSwimmingPool className="text-4xl text-[#212529]" />
                                        <p>Pool</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaShieldAlt className="text-4xl text-[#212529]" />
                                        <p>Security 24/7</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaShower className="text-4xl text-[#212529]" />
                                        <p> Showers and toilets</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaParking className="text-4xl text-[#212529]" />
                                        <p>Semi underground parking</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaStoreAlt className="text-4xl text-[#212529]" />
                                        <p>Commercial area</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaGlassMartini className="text-4xl text-[#212529]" />
                                        <p>Bar</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaConciergeBell className="text-4xl text-[#212529]" />
                                        <p>Lobby</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/img/garden.webp"
                                alt=""
                                height={500}
                                width={600}
                                className="block mx-auto"
                            />
                        </div>
                    </div>
                </div>
                <RoomSwiper roomData={dataRooms} title="Our Room Types" />
                <RoomSwiper roomData={dataPenthouses} title="Our Penthouses" />
            </div>

            {/* <div className='h-[32rem] text-white w-full  flex justify-center flex-col relative ' style={{ background: "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/img/tower-garden/VISTA-AEREA-ROOF.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div>
                    <h2 className="absolute  top-16 left-0 right-0 bottom-0 flex items-center justify-center text-white uppercase">YOUR DREAM HOME IS WAITING FOR YOU</h2>
                </div>
            </div> */}

            <div className="w-full h-auto flex justify-center text-center items-center	">
                <div className="w-[90%] mx-auto flex flex-wrap justify-around">
                    <Image
                        src="/img/OLLR-1-1-scaled.jpg"
                        alt=""
                        height={400}
                        width={450}
                        className="object-cover p-[10px]"
                    />
                    <Image
                        src="/img/tower-garden/VISTA-AEREA-ROOF.webp"
                        alt=""
                        height={400}
                        width={450}
                        className="object-cover p-[10px]"
                    />
                    <Image
                        src="/img/garden2.webp"
                        alt=""
                        height={400}
                        width={450}
                        className="object-cover p-[10px]"
                    />
                </div>
            </div>

            <section className="container w-11/12 mx-auto my-20">
                <h2>Inventory</h2>
                <div className="relative">
                    <Image
                        src="/img/tower-garden/lateral-derecho-tower-garden.webp"
                        alt="Tower 4 - QSM"
                        width={900}
                        height={700}
                        className="w-full"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 left-0 right-0 bottom-0"
                        viewBox="0 0 1600 900"
                    >
                        {units.map((unit, i) => (
                            <ApartmentInventory
                                key={i}
                                status={unit.unitStatus}
                                points={unit.points}
                                apartmentNumber={unit.unit}
                                x={unit.textPoints[0]}
                                y={unit.textPoints[1]}
                                onPopupOpen={() => openPopup(unit)}
                            />
                        ))}
                    </svg>
                </div>
            </section>

            <ContacUs className="mt-20" />

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                {selectedUnit &&
                    selectedUnitType && ( // Comprueba si hay una unidad seleccionada
                        <>
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="md:w-1/2">
                                    <h3>Unit {selectedUnit.unit} Details</h3>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <p
                                            className={`inline-block uppercase font-bold p-1 rounded-md text-white my-2 ${getColorStatus(
                                                selectedUnit.unitStatus
                                            )}`}
                                        >
                                            {selectedUnit.unitStatus}
                                        </p>
                                        <p className="font-bold bg-main text-white p-1 my-2 rounded-md uppercase">
                                            {selectedUnit.unitType}
                                        </p>
                                    </div>
                                    <p>
                                        <strong>Bedroom(s):</strong>{" "}
                                        {selectedUnitType.bedrooms}
                                    </p>
                                    <p>
                                        <strong>Bathroom(s):</strong>{" "}
                                        {selectedUnitType.bathroom}
                                    </p>
                                    <p>
                                        <strong>Level:</strong>{" "}
                                        {selectedUnit.level}
                                    </p>
                                    <p>
                                        <strong>Tower:</strong> Garden
                                    </p>
                                    <p>
                                        <strong>Size:</strong>{" "}
                                        {selectedUnitType.size}
                                    </p>

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
                                                    {
                                                        selectedUnitType.interiorsqf
                                                    }
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
                                                    {
                                                        selectedUnitType.terracesqf
                                                    }
                                                </td>
                                            </tr>
                                            {selectedUnitType.roofmp && (
                                                <>
                                                    <tr>
                                                        <td className="border border-slate-300 py-1 px-3">
                                                            Roof Top
                                                        </td>
                                                        <td className="border border-slate-300 py-1 px-3">
                                                            {
                                                                selectedUnitType.roofmp
                                                            }
                                                        </td>
                                                        <td className="border border-slate-300 py-1 px-3">
                                                            {
                                                                selectedUnitType.roofsqf
                                                            }
                                                        </td>
                                                    </tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="mt-5">
                                        {selectedUnit.unitStatus ===
                                            "available" && (
                                                <>
                                                    <h3>Price Plans</h3>
                                                    <div>
                                                        <button
                                                            className={`font-bold px-2 py-1 rounded-md ${selectePrice ==
                                                                    "discount"
                                                                    ? "text-white bg-main"
                                                                    : null
                                                                }`}
                                                            onClick={() =>
                                                                handlePriceOption(
                                                                    "discount"
                                                                )
                                                            }
                                                        >
                                                            5% Discount
                                                        </button>
                                                        <button
                                                            className={`font-bold px-2 py-1 rounded-md ${selectePrice ==
                                                                    "list-price"
                                                                    ? "text-white bg-main"
                                                                    : null
                                                                }`}
                                                            onClick={() =>
                                                                handlePriceOption(
                                                                    "list-price"
                                                                )
                                                            }
                                                        >
                                                            List Price
                                                        </button>
                                                        <div>
                                                            <table
                                                                className={`table-auto border my-4 ${selectePrice ==
                                                                        "list-price"
                                                                        ? null
                                                                        : "hidden"
                                                                    }`}
                                                            >
                                                                <tr>
                                                                    <td
                                                                        className="border p-2 text-center bg-main text-white"
                                                                        colSpan={2}
                                                                    >
                                                                        <h5 className="uppercase font-semibold">
                                                                            List
                                                                            Price
                                                                        </h5>
                                                                        <p className="text-lg font-semibold mb-0 text-white">{`$${formattedPrice(
                                                                            selectedUnit.unitPrice
                                                                        )} MXN`}</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border p-2">
                                                                        <h5>
                                                                            Down
                                                                            Payment
                                                                            (35%)
                                                                        </h5>
                                                                        <small>
                                                                            Payment
                                                                            at
                                                                            signature
                                                                            of the
                                                                            purchase-sale
                                                                            contract
                                                                        </small>
                                                                    </td>
                                                                    <td className="border p-2">
                                                                        {`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.35
                                                                        )} MXN`}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border p-2">
                                                                        <h5>
                                                                            Monthly
                                                                            Payments
                                                                            (35%)
                                                                        </h5>
                                                                        <small>
                                                                            In
                                                                            monthly
                                                                            payments
                                                                            during
                                                                            construction,
                                                                            no
                                                                            interest
                                                                        </small>
                                                                    </td>
                                                                    <td className="border p-2">
                                                                        {`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.35
                                                                        )} MXN`}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border p-2">
                                                                        <h5>
                                                                            Closing
                                                                            Payment
                                                                            (30%)
                                                                        </h5>
                                                                        <small>
                                                                            In
                                                                            monthly
                                                                            payments
                                                                            during
                                                                            construction,
                                                                            no
                                                                            interest
                                                                        </small>
                                                                    </td>
                                                                    <td className="borde p-2">
                                                                        {`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.3
                                                                        )} MXN`}
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table
                                                                className={`table-auto border my-4 ${selectePrice ==
                                                                        "discount"
                                                                        ? null
                                                                        : "hidden"
                                                                    }`}
                                                            >
                                                                <tr>
                                                                    <td
                                                                        className="border p-2 text-center bg-main text-white"
                                                                        colSpan={2}
                                                                    >
                                                                        <h5 className="uppercase font-semibold">
                                                                            5%
                                                                            Discount
                                                                            Price
                                                                        </h5>
                                                                        <p className="text-lg font-semibold mb-0 text-white line-through">{`$${formattedPrice(
                                                                            selectedUnit.unitPrice
                                                                        )} MXN`}</p>
                                                                        <p className="text-lg font-semibold mb-0 text-white">{`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.95
                                                                        )} MXN`}</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border p-2">
                                                                        <h5>
                                                                            Discount(5%)
                                                                        </h5>
                                                                    </td>
                                                                    <td className="border p-2">
                                                                        {`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.05
                                                                        )} MXN`}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border p-2">
                                                                        <h5>
                                                                            Down
                                                                            Payment
                                                                            (35%)
                                                                        </h5>
                                                                        <small>
                                                                            Payment
                                                                            at
                                                                            signature
                                                                            of the
                                                                            purchase-sale
                                                                            contract
                                                                        </small>
                                                                    </td>
                                                                    <td className="border p-2">
                                                                        {`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.95,
                                                                            0.35
                                                                        )} MXN`}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border p-2">
                                                                        <h5>
                                                                            Closing
                                                                            Payment
                                                                            (65%)
                                                                        </h5>
                                                                        <small>
                                                                            In
                                                                            monthly
                                                                            payments
                                                                            during
                                                                            construction,
                                                                            no
                                                                            interest
                                                                        </small>
                                                                    </td>
                                                                    <td className="borde p-2">
                                                                        {`$${formattedPrice(
                                                                            selectedUnit.unitPrice,
                                                                            0.95,
                                                                            0.65
                                                                        )} MXN`}
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <ul className="text-sm list-disc list-inside">
                                                        <li>
                                                            Prices, discounts and
                                                            payment plans are
                                                            subject to modifications
                                                            without previous notice.
                                                        </li>
                                                        <li>
                                                            The Purchase-Sale
                                                            agreement must be signed
                                                            within 10 days after
                                                            signing of the Purchase
                                                            Request
                                                        </li>
                                                        <li>
                                                            If the Purchase-Sale
                                                            agreement is not signed
                                                            the property will be
                                                            released and Back on the
                                                            Market
                                                        </li>
                                                    </ul>
                                                </>
                                            )}
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <h3>Plan</h3>

                                    {Array.isArray(selectedUnitType.plan) &&
                                        selectedUnitType.plan.length > 0 ? (
                                        <Swiper>
                                            <SwiperSlide>
                                                <Image
                                                    src={
                                                        selectedUnitType.plan[0]
                                                    }
                                                    width={500}
                                                    height={300}
                                                    alt={selectedUnitType.title}
                                                    className="h-auto"
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image
                                                    src={
                                                        selectedUnitType.plan[1]
                                                    }
                                                    width={500}
                                                    height={300}
                                                    alt={selectedUnitType.title}
                                                    className="h-auto"
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    ) : (
                                        <Image
                                            src={selectedUnitType.plan}
                                            width={500}
                                            height={300}
                                            alt={selectedUnitType.title}
                                        />
                                    )}

                                    <div className="mt-5">
                                        <h3>Floor</h3>
                                        {Array.isArray(
                                            selectedUnitType.gallery
                                        ) ? (
                                            <Swiper>
                                                <SwiperSlide>
                                                    <Image
                                                        src={
                                                            selectedUnitType
                                                                .gallery[0]
                                                        }
                                                        width={500}
                                                        height={300}
                                                        alt={
                                                            selectedUnitType.title
                                                        }
                                                        className="h-auto"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image
                                                        src={
                                                            selectedUnitType
                                                                .gallery[1]
                                                        }
                                                        width={500}
                                                        height={300}
                                                        alt={
                                                            selectedUnitType.title
                                                        }
                                                        className="h-auto"
                                                    />
                                                </SwiperSlide>
                                            </Swiper>
                                        ) : (
                                            <Image
                                                src={
                                                    selectedUnitType.gallery[0]
                                                }
                                                width={500}
                                                height={300}
                                                alt={selectedUnitType.title}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
            </Popup>
        </>
    );
};

export default Page;

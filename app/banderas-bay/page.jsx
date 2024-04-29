"use client"
import { useState, useEffect } from "react";
import ApartmentInventory from '@/components/ApartmentInventory'
import ContactUs from '@/components/ContacUs'
import Popup from '@/components/Popup'
import BuildingHero from '@/components/ui/BuildingHero'
import RoomSwiper from '@/components/ui/RoomSwiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoAutoplay from "@/components/ui/VideoAutoplayBanderasBay";


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
        const matchingRoomInData = data.find(
            (room) => room.title === unit.unitType
        );

        if (matchingRoomInData) {
            setSelectedUnitType(matchingRoomInData);
        }  else {
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

    const data = [
        {
            id: "1",
            title: "Condo Buzo",
            bedrooms: "2",
            bathroom: "2",
            size: "94.45 m2 - 1,016.65 Ft",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias.png",
                "/img/banderas-bay/type-1-copia.jpg",
                "/img/banderas-bay/buzo2.png",
                "/img/banderas-bay/buzo0.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias.png",
            interiorm: "84.3",
            interiorsqf: "907.39",
            terracem: "10.15",
            terracesqf: "109.25",
        },
        {
            id: "2",
            title: "Condo Rivera",
            bedrooms: "2",
            bathroom: "2",
            size: "104.35 m2 - 1,123.21 Ft",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias-2.png",
                "/img/banderas-bay/type-2-copia.jpg",
                "/img/banderas-bay/rivera2.png",
                "/img/banderas-bay/rivera3.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias-2.png",
            interiorm: "83.8",
            interiorsqf: "907.01",
            terracem: "20.55",
            terracesqf: "221.19",
        },
        {
            id: "3",
            title: "Garden 1 & 2",
            bedrooms: "2",
            bathroom: "2",
            size: "101 (136.5 m2 - 1,469.27 Ft) / 102 (150.5 m2 - 1,619.96 Ft)",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias-3.png",
                "/img/banderas-bay/1-piso-copia.jpg",
                "/img/banderas-bay/garden2.png",
                "/img/banderas-bay/garden3.png",
                "/img/banderas-bay/garden4.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias-3.png",
            interiorm: "84.3 / 83.8",
            interiorsqf: "907.39 / 902.01",
            terracem: "52.2 / 66.7",
            terracesqf: "561.87 / 717.95",
        },
    ];

    const units = [
        {
            unit: "102",
            unitType: "Garden 1 & 2",
            level: "1",
            unitStatus: "sold",
            unitPrice: "7800000",
            points: "475,955 475,1100 795,1100 795,955",
            textPoints: [610, 1040],
        },
        {
            unit: "101",
            unitType: "Garden 1 & 2",
            level: "1",
            unitStatus: "available",
            unitPrice: "7800000",
            points: "1180,1010 1180,1200 795,1190 795,1010",
            textPoints: [950, 1115],
        },
        {
            unit: "201",
            unitType: "Condo Buzo",
            level: "2",
            unitStatus: "available",
            unitPrice: "7300000",
            points: "1180,825 1180,1010 795,1010 795,825",
            textPoints: [950, 935],
        },
        {
            unit: "301",
            unitType: "Condo Buzo",
            level: "3",
            unitStatus: "sold",
            unitPrice: "7300000",
            points: "1180,635 1180,825 795,825 795,635",
            textPoints: [950, 750],
        },
        {
            unit: "401",
            unitType: "Condo Buzo",
            level: "4",
            unitStatus: "sold",
            unitPrice: "-",
            points: "1180,445 1180,635 795,635 795,445",
            textPoints: [950, 560],
        },
        {
            unit: "501",
            unitType: "Condo Buzo",
            level: "5",
            unitStatus: "sold",
            unitPrice: "7550000",
            points: "1180,255 1180,445 795,445 795,255",
            textPoints: [950, 370],
        },
        {
            unit: "601",
            unitType: "Condo Buzo",
            level: "6",
            unitStatus: "sold",
            unitPrice: "-",
            points: "1180,40 1180,255 795,255 795,40",
            textPoints: [950, 180],
        },
        {
            unit: "202",
            unitType: "Condo Rivera",
            level: "1",
            unitStatus: "sold",
            unitPrice: "-",
            points: "475,795 475,955 795,955 795,795",
            textPoints: [610, 890],
        },
        {
            unit: "302",
            unitType: "Condo Rivera",
            level: "1",
            unitStatus: "sold",
            unitPrice: "-",
            points: "475,630 475,795 795,795 795,630",
            textPoints: [610, 730],
        },
        {
            unit: "402",
            unitType: "Condo Rivera",
            level: "1",
            unitStatus: "sold",
            unitPrice: "-",
            points: "475,470 475,630 795,630 795,470",
            textPoints: [610, 565],
        },
        {
            unit: "502",
            unitType: "Condo Rivera",
            level: "1",
            unitStatus: "available",
            unitPrice: "8200000",
            points: "475,310 475,470 795,470 795,310",
            textPoints: [610, 400],
        },
        {
            unit: "602",
            unitType: "Condo Rivera",
            level: "1",
            unitStatus: "sold",
            unitPrice: "-",
            points: "475,115 475,310 795,310 795,115",
            textPoints: [610, 240],
        }
    ];
    return (
        <>
            <VideoAutoplay />


            <div className='container w-11/12 mx-auto mt-16'>
                <div>
                    <div>
                        <h1 className="text-5xl lg:px-24 mx-1 mb-8 text-center">A GREAT DEVELOPMENT FOR THOSE THAT LOVE A BEACH TOWN</h1>
                        {/* <h1 className="lg:px-24 mx-1 mb-8 text-center">Your new appartment in Quinta Banderas Bay</h1> */}

                    </div>
                    <div className=' mx-1 text-justify'>
                        <p>But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>

                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="lg:px-24 mx-1 my-8 text-5xl text-center ">MASTER PLAN</h1>
                    </div>
                    <div className='mx-auto text-center text-lg'>
                        <ul>
                            <li className='m-1'>1 Towers</li>
                            <li className='m-1'>Exclusive Condos / Departments</li>
                            <li className='m-1'>Roof Top</li>
                            <li className='m-1'>Swimming pool</li>
                            <li className='m-1'>Underground parking</li>
                        </ul>
                    </div>
                </div>
                <RoomSwiper roomData={data} title="Our Room Types"/>
            </div>

            
            <div className='h-[32rem] text-white w-full  flex justify-center flex-col relative ' style={{background: "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/img/banderas-bay/1_1-Foto-scaled.jpg)", backgroundSize: "cover" , backgroundPosition: "center"}}>
                <div>
                    <h1 className="lg:px-24 mx-1 pt-8 text-center text-white">Amenities</h1>
                </div>
                <div className='container w-11/12 mx-auto text-center text-xl uppercase  '>
                    <ul className='flex flex-wrap pb-6 items-center justify-center'>
                        <li className='w-1/3 my-5 font-semibold'>Security 24/7</li>
                        <li className='w-1/3 my-5 font-semibold'>Roof top</li>
                        <li className='w-1/3 my-5 font-semibold'>Swimming Pool</li>
                        <li className='w-1/3 my-5 font-semibold'>Underground Parking</li>
                        <li className='w-1/3 my-5 font-semibold'>Access to the beach</li>
                    </ul>
                </div>
            </div>

            <section className="container w-11/12 mx-auto my-20">
                <h2>Inventory</h2>
                <div className="relative">
                    <Image
                        src="/img/banderas-bay/bucerias-inventory.webp"
                        alt="Tower 4 - QSM"
                        width={900}
                        height={700}
                        className="w-full"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 left-0 right-0 bottom-0"
                        viewBox="0 0 1600 1400"
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

            <div className='container w-11/12 mx-auto mt-16'>
                <h2>Explore Our Tower in Virtual Reality</h2>
                <iframe src="https://my.matterport.com/show/?m=GhyjV31yPiz&nt=1" width="100%" height="600">

                </iframe>
            </div>

           


            <ContactUs />

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
                                        <strong>Tower:</strong> Banderas Bay
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
                                                        {/* <button
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
                                                        </button> */}
                                                        <button
                                                            className={`font-bold px-2 py-1 rounded-md text-white bg-main`}
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
                                                                className={`table-auto border my-4`}
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
                                                            {/* <table
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
                                                            </table> */}
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
    )
}

export default Page
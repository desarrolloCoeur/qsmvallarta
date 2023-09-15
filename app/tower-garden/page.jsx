import React from 'react'
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
import ContacUs from '@/components/ContacUs'
import BuildingHero from '@/components/ui/BuildingHero'
import RoomSwiper from '@/components/ui/RoomSwiper'


const page = () => {
    const data = [
        {
            id: "1",
            title: "Room Type - A",
            bedrooms: "2",
            bathroom: "2",
            size: "141 m2 – 1,518 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomA.webp",
                "/img/tower-garden/garden-roomA2.webp",
            ],
            plan: "/img/tower-garden/garden-roomA1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "2",
            title: "Room Type - B",
            bedrooms: "1",
            bathroom: "1",
            size: "65 m2 – 699.5 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomB.webp",
                "/img/tower-garden/garden-roomB2.webp",
            ],
            plan: "/img/tower-garden/garden-roomB1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "3",
            title: "Room Type - C",
            bedrooms: "2",
            bathroom: "2",
            size: "105 m2 – 1130 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomC.webp",
                "/img/tower-garden/garden-roomC2.webp",
            ],
            plan: "/img/tower-garden/garden-roomC1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "4",
            title: "Room Type - D",
            bedrooms: "2",
            bathroom: "2",
            size: "112 m2 – 1205.5 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomD.webp",
                "/img/tower-garden/garden-roomD2.webp",
            ],
            plan: "/img/tower-garden/garden-roomD1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "5",
            title: "Room Type - E",
            bedrooms: "2",
            bathroom: "2",
            size: "127 m2 – 1,367 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomE.webp",
                "/img/tower-garden/garden-roomE2.webp",
            ],
            plan: "/img/tower-garden/garden-roomE1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "6",
            title: "Room Type - F",
            bedrooms: "1",
            bathroom: "1",
            size: "53 m2 – 570.5 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomF.webp",
                "/img/tower-garden/garden-roomF2.webp",
            ],
            plan: "/img/tower-garden/garden-roomF1.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "7",
            title: "Room Type - G",
            bedrooms: "3",
            bathroom: "3.5",
            size: "242.2 m2 – 2,607 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomG.webp",
                "/img/tower-garden/garden-roomG4.webp",
                "/img/tower-garden/garden-roomG5.webp",
                "/img/tower-garden/garden-roomG6.webp",
            ],
            plan: "/img/tower-garden/garden-roomG3.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "8",
            title: "Room Type - H",
            bedrooms: "3",
            bathroom: "3.5",
            size: "225 m2 – 2,422 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomH.webp",
                "/img/tower-garden/garden-roomH4.webp",
                "/img/tower-garden/garden-roomH5.webp",
                "/img/tower-garden/garden-roomH6.webp",
            ],
            plan: "/img/tower-garden/garden-roomH3.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "9",
            title: "Room Type - I",
            bedrooms: "3",
            bathroom: "3",
            size: "157.5 m2 – 1,695 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomI.webp",
                "/img/tower-garden/garden-roomI3.webp",
                "/img/tower-garden/garden-roomI4.webp",
            ],
            plan: "/img/tower-garden/garden-roomI2.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
        {
            id: "10",
            title: "Room Type - J",
            bedrooms: "3",
            bathroom: "3.5",
            size: "299.5 m2 – 3,223 ft2",
            gallery: [
                // "/img/tower-garden/garden-roomJ.webp",
                "/img/tower-garden/garden-roomJ4.webp",
                "/img/tower-garden/garden-roomJ5.webp",
                "/img/tower-garden/garden-roomJ6.webp",
            ],
            plan: "/img/tower-garden/garden-roomJ3.webp",
            interiorm: "0",
            interiorsqf: "0",
            terracem: "0",
            terracesqf: "0",
        },
    ];

    return (
        <>
            <BuildingHero background="/img/tower-garden/VISTA-FRENTE-S.webp" title="Garden" />
            <div className='container w-11/12 mx-auto mt-16'>
                <div>
                    <h1 className="text-center text-5xl">
                        INCREDIBLE VIEWS, COMMODITY AND THE BEST AMENITIES.
                    </h1>
                    <div className="mx-auto flex justify-center flex-col md:flex-row gap-5 mt-16">
                        <div className="text-center  md:w-1/2 max-w-[500px] mx-auto">
                            <p className="italic">
                                Our tower offers incredible views, commodity and the best amenities:
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
                            <Image src="/img/garden.webp" alt="" height={500} width={600} className="block mx-auto" />
                        </div>
                    </div>
                </div>
                <RoomSwiper roomData={data} title="Our Room Types" />

            </div>

            {/* <div className='h-[32rem] text-white w-full  flex justify-center flex-col relative ' style={{ background: "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/img/tower-garden/VISTA-AEREA-ROOF.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div>
                    <h2 class="absolute  top-16 left-0 right-0 bottom-0 flex items-center justify-center text-white uppercase">YOUR DREAM HOME IS WAITING FOR YOU</h2>
                </div>
            </div> */}

            <div class="w-full h-auto flex justify-center text-center items-center	">
                <div class="w-[90%] mx-auto flex flex-wrap justify-around">
                <Image src="/img/OLLR-1-1-scaled.jpg" alt="" height={400} width={450} className="object-cover p-[10px]" />
                <Image src="/img/tower-garden/VISTA-AEREA-ROOF.webp" alt="" height={400} width={450} className="object-cover p-[10px]" />
                <Image src="/img/garden2.webp" alt="" height={400} width={450} className="object-cover p-[10px]" />
                </div>
            </div>


            <ContacUs className="mt-20" />

        </>
    )
}

export default page
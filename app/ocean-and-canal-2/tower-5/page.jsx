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


const page = () => {
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
                <ContacUs/>
            </div>

        </>
    )
}

export default page
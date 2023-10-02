import { useState, useRef } from "react";
import Image from "next/image";
import {
    FaBed,
    FaBath,
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const RoomCard = ({ room }) => {
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
        <div className="border border-slate-300 pb-6 rounded-md text-center">
            {showPlan[room.id] ? (
    // Si showPlan[room.id] es verdadero, mostrar el Swiper
    Array.isArray(room.plan) ? (
        // Si room.plan es un array, mostrar el Swiper con múltiples imágenes
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper card-2">
                {room.plan.map((planImage, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            className="w-full object-cover h-72"
                            src={planImage}
                            alt={room.title}
                            width={500}
                            height={600}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    ) : (
        // Si room.plan no es un array, mostrar solo una imagen
        <>
            <Image
                className="w-full object-cover h-72"
                src={room.plan}
                alt={room.title}
                width={500}
                height={600}
            />
        </>
    )
) : (
    // Si showPlan[room.id] es falso, mostrar solo una imagen
    <>
        <Image
            className="w-full object-cover h-72"
            src={room.gallery[0]}
            alt={room.title}
            width={500}
            height={600}
        />
    </>
)}

            <h3 className="lg:text-4xl text-2xl my-6 mx-3">{room.title}</h3>
            {showInfo[room.id] ? (
                <div className="flex gap-3 m-auto justify-center">
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
                                    {room.interiorm}
                                </td>
                                <td className="border border-slate-300 py-1 px-3">
                                    {room.interiorsqf}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 py-1 px-3">
                                    Terrace
                                </td>
                                <td className="border border-slate-300 py-1 px-3">
                                    {room.terracem}
                                </td>
                                <td className="border border-slate-300 py-1 px-3">
                                    {room.terracesqf}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>
                    <div className="flex gap-3 m-auto justify-center">
                        <p className="flex items-center gap-2 textroom">
                            <FaBed className="text-[#212529]" /> {room.bedrooms}{" "}
                            Bedrooms
                        </p>
                        <p className="flex items-center gap-1 textroom ">
                            <FaBath className="text-[#212529]" />{" "}
                            {room.bathroom} Bathrooms
                        </p>
                    </div>
                    <div>
                        <p className="mb-0">{room.size}</p>
                        <div className="flex justify-center gap-1 ">
                            <FaLongArrowAltLeft className="text-[#212529]" />
                            <FaLongArrowAltRight className="text-[#212529]" />
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
    );
};

export default RoomCard;

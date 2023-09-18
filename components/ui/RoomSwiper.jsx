"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import RoomCard from "../ui/RoomCard";

const RoomSwiper = ({ roomData, title }) => {
    const [selectedBedroom, setSelectedBedroom] = useState("All");

    // Usar un conjunto (Set) para almacenar los valores únicos de "bedrooms"
    const uniqueBedrooms = new Set();

    // Recorrer el arreglo y agregar cada valor de "bedrooms" al conjunto
    roomData.forEach(item => {
    uniqueBedrooms.add(item.bedrooms);
    });

    // Convertir el conjunto en un arreglo si es necesario
    const uniqueBedroomsArray = Array.from(uniqueBedrooms);

    uniqueBedroomsArray.sort((a,b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);

        return numA - numB;

    });

    
    const dataFiltered = selectedBedroom === "All" ? roomData : roomData.filter(data => data.bedrooms === selectedBedroom);

    return (
        <div className="mt-16 mb-32">
            <h2>{title}</h2>
            <div className="flex items-center mb-5">
                <p className="mb-0">Filter by bedrooms:</p>
                <select
                    className="bg-main p-1 text-white rounded-md mx-2"
                    value={selectedBedroom}
                    onChange={e => setSelectedBedroom(e.target.value)}
                >
                    <option value="All">Select</option>
                    {
                        uniqueBedroomsArray.map((bedrooms,index) => (
                            <option value={bedrooms} key={index}>{bedrooms} Bedrooms</option>

                        ))
                    }
                </select>
            </div>
            <Swiper
                className="mySwiper card"
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 15 },
                }}
            >
                {dataFiltered.map((room, index) => (
                    <SwiperSlide key={index}>
                        <RoomCard room={room} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RoomSwiper;

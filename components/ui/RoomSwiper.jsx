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
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
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

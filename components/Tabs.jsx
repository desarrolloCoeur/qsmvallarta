"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

const Tabs = ({ tabs }) => {
    const [uniqueKey, setUniqueKey] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (index) => {
        setActiveTab(index);
        setUniqueKey(uniqueKey + 1);
    };

    return (
        <div className="tabs">
            <Swiper
                slidesPerView={'auto'}
                className="bg-[rgba(0,0,0,.13)] rounded-md "

            >
                {tabs.map((tab, index) => (
                    <SwiperSlide
                        key={index}
                        className={`cursor-pointer text-xl px-4 py-2 rounded-md text-center !w-fit ${
                            index === activeTab ? "bg-main text-white" : ""
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        {tab.label}
                    </SwiperSlide>
                ))}
            </Swiper>



            <Swiper
                key={uniqueKey}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                className="mt-5"
            >
                {tabs.map((tab, index) =>
                    tab.images.map((image, imgIndex) => (
                        <SwiperSlide
                            key={imgIndex}
                            className={`${
                                index === activeTab ? "active" : "hidden-slide"
                            }`}
                        >
                            <Image
                                src={image}
                                width={500}
                                height={700}
                                alt={`Image ${imgIndex + 1}`}
                                loading="lazy"
                                className="h-[350px] object-cover"
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
};

export default Tabs;

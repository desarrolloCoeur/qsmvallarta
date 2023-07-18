'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import './../work-in-progress/tabs.css';

const Tab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <div className='lg:mx-24 mx-3 mb-24 '>
            <ul className="tabs">
                <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>2023</li>
            </ul>

            <div className="tab_content">
            <ul className="tabs">
                <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Marzo</li>
            </ul>

                {/* 2023 */}
                {activeTab === 1 && <div className="tab_panel flex flex-wrap gap-6 mt-12">
                    {/* Marzo */}
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-5.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-6.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-7.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-8.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-9.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-10.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-11.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-12.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-13.webp'} height={135} width={240}/>
                    <Image src={'/img/ocean-canal-2/2023/marzo/marzo-14.webp'} height={135} width={240}/>
                </div>}
            </div>
        </div>
    );
};

export default Tab;
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
        <div className='lg:mx-24 mx-3 mb-24'>
            <ul className="tabs">
                <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>2020</li>
                <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>2021</li>
                <li className={activeTab === 16 ? 'active' : ''} onClick={() => handleTabClick(16)}>2022</li>
                <li className={activeTab === 17 ? 'active' : ''} onClick={() => handleTabClick(17)}>2023</li>
            </ul>

            <div className="tab_content">
            <ul className="tabs mb-6">
                {/* 2020 */}
                <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Early</li>
                <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Octubre</li>
                <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Noviembre</li>

                {/* 2021 */}
                <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>Enero</li>
                <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}>Febrero</li>
                <li className={activeTab === 6 ? 'active' : ''} onClick={() => handleTabClick(6)}>Marzo</li>
                <li className={activeTab === 7 ? 'active' : ''} onClick={() => handleTabClick(7)}>Abril</li>
                <li className={activeTab === 8 ? 'active' : ''} onClick={() => handleTabClick(8)}>Mayo</li>
                <li className={activeTab === 9 ? 'active' : ''} onClick={() => handleTabClick(9)}>Junio</li>
                <li className={activeTab === 10 ? 'active' : ''} onClick={() => handleTabClick(10)}>Julio</li>
                <li className={activeTab === 11 ? 'active' : ''} onClick={() => handleTabClick(11)}>Agosto</li>
                <li className={activeTab === 12 ? 'active' : ''} onClick={() => handleTabClick(12)}>Septiembre</li>
                <li className={activeTab === 13 ? 'active' : ''} onClick={() => handleTabClick(13)}>Octubre</li>
                <li className={activeTab === 14 ? 'active' : ''} onClick={() => handleTabClick(14)}>Noviembre</li>
                <li className={activeTab === 15 ? 'active' : ''} onClick={() => handleTabClick(15)}>Diciembre</li>
            </ul>




                {/* 2020 */}
                {activeTab === 1 && <div className="tab_panel flex flex-wrap gap-6 ">
                    {/* early */}
                    <Image src={'/img/work-in-progress/2020/early/avance-1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/early/avance-2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/early/avance-3.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/early/avance-4.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/early/avance-6.jpg'} height={135} width={240}/>
                    </div>}
                {activeTab === 2 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* octubre */}
                    <Image src={'/img/work-in-progress/2020/octubre/working-october-2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/octubre/working-october.jpg'} height={135} width={240}/>
                    </div>}
                {activeTab === 3 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* noviembre */}
                    <Image src={'/img/work-in-progress/2020/noviembre/wip-noviembre-1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/noviembre/wip-noviembre-2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/noviembre/wip-noviembre-3.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2020/noviembre/wip-noviembre-4.jpg'} height={135} width={240}/>
                </div>}
                



                {/* 2021 */}
                {activeTab === 4 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* enero */}
                    <Image src={'/img/work-in-progress/2021/enero/wip-january-1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/enero/wip-january-2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/enero/wip-january-3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/enero/wip-january-4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/enero/wip-january-5-min.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 5 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* febrero */}
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_3.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_4.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_5.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_6.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_7.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_8.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_9.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/febrero/Feb21_11.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 6 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* marzo */}
                    <Image src={'/img/work-in-progress/2021/marzo/Mar21_1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/marzo/Mar21_2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/marzo/Mar21_3.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/marzo/Mar21_5.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/marzo/Mar21_6.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 7 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* abril */}
                    <Image src={'/img/work-in-progress/2021/abril/Abr21_1-1-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/abril/Abr21_2-1-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/abril/Abr21_3.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/abril/Abr21_4.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/abril/Abr21_5-1-scaled.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 8 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* mayo */}
                    <Image src={'/img/work-in-progress/2021/mayo/May21-1-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/mayo/May21-2-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/mayo/May21-3-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/mayo/May21-4-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/mayo/May21-5-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/mayo/May21-6-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/mayo/May21-7-scaled.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 9 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* junio */}
                    <Image src={'/img/work-in-progress/2021/junio/Jun21-1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/junio/Jun21-2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/junio/Jun21-3.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/junio/Jun21-4.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/junio/Jun21-5.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/junio/Jun21-6.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 10 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* julio */}
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-01.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-02.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-03.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-04.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-05.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-06.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/julio/Jul21-07.jpeg'} height={135} width={240}/>
                </div>}
                {activeTab === 11 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* agosto */}
                    <Image src={'/img/work-in-progress/2021/agosto/Ago21-01.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/agosto/Ago21-02.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/agosto/Ago21-03.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/agosto/Ago21-04.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/agosto/Ago21-05.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 12 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* septiembre */}
                    <Image src={'/img/work-in-progress/2021/septiembre/sep1-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep2-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep3-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep4-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep5-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep6-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep7-min-scaled.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/septiembre/sep8-min-scaled.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 13 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* octubre */}
                    <Image src={'/img/work-in-progress/2021/octubre/oct-21-1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/octubre/oct-21-2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/octubre/oct-21-3.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 14 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* noviembre */}
                    <Image src={'/img/work-in-progress/2021/noviembre/nov-21-1.jpg'} height={135} width={240}/>
                </div>}
                {activeTab === 15 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* diciembre */}
                    <Image src={'/img/work-in-progress/2021/diciembre/dec-21-1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2021/diciembre/dec-21-2.jpg'} height={135} width={240}/>
                </div>}



                {/* 2022 */}
                {activeTab === 16 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* enero */}
                    <Image src={'/img/work-in-progress/2022/enero/jan-22-1.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/enero/jan-22-2.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/enero/jan-22-3.jpg'} height={135} width={240}/>
                    {/* febrero */}
                    <Image src={'/img/work-in-progress/2022/febrero/feb-22-1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/febrero/feb-22-2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/febrero/feb-22-3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/febrero/feb-22-4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/febrero/feb-22-5-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/febrero/feb-22-6-min.jpg'} height={135} width={240}/>
                    {/* marzo */}
                    <Image src={'/img/work-in-progress/2022/marzo/mar-22-1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/marzo/mar-22-2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/marzo/mar-22-3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/marzo/mar-22-4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/marzo/mar-22-5-min.jpg'} height={135} width={240}/>
                    {/* abril */}
                    <Image src={'/img/work-in-progress/2022/abril/apri-22-1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/abril/apri-22-2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/abril/apri-22-3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/abril/apri-22-4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/abril/apri-22-5-min.jpg'} height={135} width={240}/>
                    {/* mayo */}
                    <Image src={'/img/work-in-progress/2022/mayo/may22_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_5-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_6-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_7-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/mayo/may22_8-min.jpg'} height={135} width={240}/>
                    {/* junio */}
                    <Image src={'/img/work-in-progress/2022/junio/june_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/junio/june_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/junio/june_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/junio/june_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/junio/june_5-min.jpg'} height={135} width={240}/>
                    {/* julio */}
                    <Image src={'/img/work-in-progress/2022/julio/july_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/julio/july_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/julio/july_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/julio/july_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/julio/july_5-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/julio/july_6-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/julio/july_7-min.jpg'} height={135} width={240}/>
                    {/* agosto */}
                    <Image src={'/img/work-in-progress/2022/agosto/august_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/agosto/august_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/agosto/august_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/agosto/august_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/agosto/august_5-min.jpg'} height={135} width={240}/>
                    {/* septiembre */}
                    <Image src={'/img/work-in-progress/2022/septiembre/september_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/septiembre/september_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/septiembre/september_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/septiembre/september_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/septiembre/september_5-min.jpg'} height={135} width={240}/>
                    {/* octubre */}
                    <Image src={'/img/work-in-progress/2022/octubre/october_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/octubre/october_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/octubre/october_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/octubre/october_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/octubre/october_5-min.jpg'} height={135} width={240}/>
                    {/* noviembre */}
                    <Image src={'/img/work-in-progress/2022/noviembre/november_1-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/noviembre/november_2-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/noviembre/november_3-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/noviembre/november_4-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/noviembre/november_5-min.jpg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2022/noviembre/november_6-min.jpg'} height={135} width={240}/>
                </div>}
                {/* 2023 */}
                {activeTab === 17 && <div className="tab_panel flex flex-wrap gap-6">
                    {/* enero */}
                    <Image src={'/img/work-in-progress/2023/enero/enero-1-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/enero/enero-2-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/enero/enero-3-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/enero/enero-4-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/enero/enero-5-min.webp'} height={135} width={240}/>
                    {/* febrero */}
                    <Image src={'/img/work-in-progress/2023/febrero/febrero-1-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/febrero/febrero-2-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/febrero/febrero-4-min.webp'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/febrero/febrero-5-min.webp'} height={135} width={240}/>
                    {/* abril */}
                    <Image src={'/img/work-in-progress/2023/abril/marzo-1-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-2-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-3-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-5-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-8-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-10-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-15-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-16-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-17-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-18-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-19-min.jpeg'} height={135} width={240}/>
                    <Image src={'/img/work-in-progress/2023/abril/marzo-20-min.jpeg'} height={135} width={240}/>
                </div>}
            </div>
        </div>
    );
};

export default Tab;
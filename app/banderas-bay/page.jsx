import ContactUs from '@/components/ContacUs'
import BuildingHero from '@/components/ui/BuildingHero'
import RoomSwiper from '@/components/ui/RoomSwiper'
import React from 'react'


const page = () => {
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
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
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
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "3",
            title: "Garden 1 & 2",
            bedrooms: "4",
            bathroom: "4",
            size: "101 (136.5 m2 - 1,469.27 Ft) / 102 (150.5 m2 - 1,619.96 Ft)",
            gallery: [
                "/img/banderas-bay/nuevo-bucerias-3.png",
                "/img/banderas-bay/1-piso-copia.jpg",
                "/img/banderas-bay/garden2.png",
                "/img/banderas-bay/garden3.png",
                "/img/banderas-bay/garden4.png",
            ],
            plan: "/img/banderas-bay/nuevo-bucerias-3.png",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
    ];
    return (
        <>
            <BuildingHero background="/img/banderas-bay/header.jpg"/>


            <div className='container w-11/12 mx-auto mt-16'>
                <div>
                    <div>
                        <h1 class="text-5xl lg:px-24 mx-1 mb-8 text-center">A GREAT DEVELOPMENT FOR THOSE THAT LOVE A BEACH TOWN</h1>
                        {/* <h1 class="lg:px-24 mx-1 mb-8 text-center">Your new appartment in Quinta Banderas Bay</h1> */}

                    </div>
                    <div className=' mx-1 text-justify'>
                        <p>But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>

                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 my-8 text-center ">MASTER PLAN</h1>
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
                    <h1 class="lg:px-24 mx-1 pt-8 text-center text-white">Amenities</h1>
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

            <ContactUs />

        </>
    )
}

export default page
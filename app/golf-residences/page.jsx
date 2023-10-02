import ContactUs from '@/components/ContacUs'
import BuildingHero from '@/components/ui/BuildingHero'
import RoomSwiper from '@/components/ui/RoomSwiper';


const page = () => {
    const data = [
        {
            id: "1",
            title: "House",
            bedrooms: "4",
            bathroom: "4",
            // size: "94.45 m2 - 1,016.65 Ft",
            gallery: [
                "/img/golf-residences/golf-house-1.jpg",
                "/img/golf-residences/golf-house-2.jpg",
                "/img/golf-residences/golf-house-3.jpg",
                "/img/golf-residences/golf-house-4.jpg",
            ],
            plan: "/img/golf-residences/",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "2",
            title: "Department",
            bedrooms: "3",
            bathroom: "3.5",
            // size: "104.35 m2 - 1,123.21 Ft",
            gallery: [
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-01.jpg",
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-20.jpg",
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-16.jpg",
                "/img/golf-residences/Quinta-San-Miguel-Golf-Residences-04.jpg",
                "/img/golf-residences/quinta-san-miguel-golf-dinning.jpg",
            ],
            plan: "/img/golf-residences/",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
    ];

    return (
        <>
            <BuildingHero background="/img/golf-residences/home-golf.jpg" title="Golf Residences"/>

            <div className='container w-11/12 mx-auto mt-16'> 
                <div>
                    <div>
                        <h1 className="lg:px-24 mx-1 mb-8 text-5xl text-center">COMBINING A HIGH LEVEL OF COMFORT WITH A TOUCH OF INNOVATION</h1>
                    </div>
                    <div className=' mx-1 text-center'>
                        <p>Natural light will pleasantly bathe the interiors, bringing you a wonderful feeling of spaciousness and freedom.</p>
                    </div>
                </div>
                <div className='bg-[#8c8c8c] text-white w-full mx-auto mt-6 '>
                    <div>
                        <h1 className="lg:px-24 mx-1 pt-8 text-center text-white">THE PROJECT</h1>
                    </div>
                    <div className='mx-auto text-center text-lg'>
                        <ul className='flex flex-wrap pb-6 items-center justify-center'>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>16 Apartments</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>9 Villas</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Double height lobby</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Palapa</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Pool with childrens area</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Private covered parking</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Multi-purpose room</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Golf club</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Sports club house</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Beach club</li>
                            <li className='w-1/2 md:w-1/4 font-semibold my-4'>Security access</li>
                        </ul>
                    </div>
                </div>
                <RoomSwiper roomData={data} title="Our Apartment Types - SOLD OUT" />
            </div>


            <ContactUs />

        </>
    )
}

export default page
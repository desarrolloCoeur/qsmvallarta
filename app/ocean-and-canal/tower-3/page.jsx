import Image from 'next/image'
import ContacUs from '@/components/ContacUs'
import RoomSwiper from '@/components/ui/RoomSwiper'


const page = () => {
    const data = [
        {
            id: "1",
            title: "Unidad A",
            bedrooms: "2",
            bathroom: "2",
            size: "96 m² - 1033.33 Feet",
            gallery: [
                "/img/tower-3/unidad-A3.jpg",
                "/img/tower-3/unidad-A2-1-scaled.jpg",
                "/img/tower-3/unidad-A.png",
            ],
            plan: "/img/tower-3/PENTHOUSE.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "2",
            title: "Unidad B",
            bedrooms: "2",
            bathroom: "2",
            size: "134.7 m² - 1449.57 feet",
            gallery: [
                "/img/tower-3/Unidad-B2-1-scaled.jpg",
                "/img/tower-3/Unidad-B.png",
            ],
            plan: "/img/tower-3/Penthouse-standard-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "3",
            title: "Unidad C",
            bedrooms: "2",
            bathroom: "2",
            size: "128 m² - 1377.78 feet",
            gallery: [
                "/img/tower-3/Unidad-C-1-scaled.jpg",
                "/img/tower-3/Unidad-C2.png",
            ],
            plan: "/img/tower-3/apartment-corner-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "4",
            title: "Penthouse A",
            bedrooms: "3",
            bathroom: "4",
            size: "154.5 m² - 1663.01 feet",
            gallery: [
                "/img/tower-3/1-6.png",
                "/img/tower-3/7-1-scaled.jpg",
                "/img/tower-3/PH-TIPO-A-PLANTA-ALTA.png",
                "/img/tower-3/PH-TIPO-A-PLANTA-BAJA.png",
            ],
            plan: "/img/tower-3/apartment-standard-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "5",
            title: "Penthouse B",
            bedrooms: "3",
            bathroom: "3.5",
            size: "201.4 m² - 2167.85 Feet",
            gallery: [
                "/img/tower-3/2-4-1.png",
                "/img/tower-3/6-2-1-scaled.jpg",
                "/img/tower-3/PH-TIPO-B-PLANTA-ALTA.Denoiser.png",
                "/img/tower-3/PH-TIPO-B-PLANTA-BAJA.Denoiser.png",
            ],
            plan: "/img/tower-3/apartment-loft-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
        {
            id: "6",
            title: "Penthouse C",
            bedrooms: "3",
            bathroom: "3.5",
            size: "193.2 m² - 2079.59 Feet",
            gallery: [
                "/img/tower-3/35-1-scaled.jpg",
                "/img/tower-3/15-1-scaled.jpg",
                "/img/tower-3/PH-TIPO-C-PLANTA-BAJA.Denoiser.png",
                "/img/tower-3/PH-TIPO-C-PLANTA-ALTA.png",
            ],
            plan: "/img/tower-3/apartment-standard-1.pdf",
            // interiorm: "",
            // interiorsqf: "",
            // terracem: "",
            // terracesqf: "",
        },
    ];


    return (
        <>
            <div>
                <Image src="/img/tower-3/tower-3.jpg" className=' w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' />
            </div>

            <div className='container w-11/12 mx-auto mt-16'>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 mb-8 text-center">IN THE EXCLUSIVE ZONE OF NUEVO VALLARTA</h1>
                    </div>
                    <div className=' mx-1 text-justify'>
                        <p>Quinta San Miguel Ocean & Canal is an exclusive development with unique taste, offering a private canal with slips area surrounded by luxury resorts, the finest restaurants and commercial centers. It is located in the most secure zone with the highest capital gain in Riviera Nayarit.</p>
                        <p>Part of our main philosophy is to create with less impact possible in our environment, by doing so we offer at the same time a home surrounded by natural scenery to our clients, part of the process is made by re-using metallic containers in our building structures. </p>
                        <p>But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 my-8 text-center ">MASTER PLAN</h1>
                    </div>
                    <div className='mx-auto text-center text-lg'>
                        <ul>
                            <li className='m-1'>3 Towers</li>
                            <li className='m-1'>Boat Slips</li>
                            <li className='m-1'>Green Areas</li>
                            <li className='m-1'>Swimming pool</li>
                            <li className='m-1'>Underground parking</li>
                            <li className='m-1'>Commercial zone</li>
                        </ul>
                    </div>
                </div>
                <RoomSwiper roomData={data} title="Our Room Types - SOLD OUT"/>
            </div>
            


            <div className='h-[29rem] text-white w-full  flex justify-center flex-col relative ' style={{background: "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/img/tower-1-and-2/slider.jpg)", backgroundSize: "cover" , backgroundPosition: "center"}}>
                <div>
                    <h1 class="lg:px-24 mx-1 pt-8 text-center text-white">Why Quinta San Miguel ?</h1>
                </div>
                <div className='container w-11/12 mx-auto text-center text-xl uppercase  '>
                    <ul className='flex flex-wrap pb-6 items-center '>
                        <li className='w-1/3 my-5 font-semibold'>Private condominium</li>
                        <li className='w-1/3 my-5 font-semibold'>Large space</li>
                        <li className='w-1/3 my-5 font-semibold'>Multiple recreation center</li>
                        <li className='w-1/3 my-5 font-semibold'>Location</li>
                        <li className='w-1/3 my-5 font-semibold'>Comfort</li>
                        <li className='w-1/3 my-5 font-semibold'>Investment</li>
                    </ul>
                </div>
            </div>

            <ContacUs />
        </>
    )
}

export default page
import Image from 'next/image'
import ContacUs from '@/components/ContacUs'
import RoomSwiper from '@/components/ui/RoomSwiper'


const page = () => {
    const data = [
        {
            id: "1",
            title: "Penthouse Corner",
            bedrooms: "4",
            bathroom: "4",
            size: "289 m² - 3110.77 Feet",
            gallery: [
                "/img/tower-1-and-2/penthouse-corner-1.jpg",
                "/img/tower-1-and-2/penthouse-corner-2-scaled.jpg",
                "/img/tower-1-and-2/penthouse-corner-3.jpg",
                "/img/tower-1-and-2/quinta-san-miguel-bathroom-2-scaled.jpg",
                "/img/tower-1-and-2/penthouse-corner-5.jpg",
            ],
            plan: "/img/tower-1-and-2/PENTHOUSE.pdf",
            // interiorm: "82",
            // interiorsqf: "882",
            // terracem: "62",
            // terracesqf: "667",
        },
        {
            id: "2",
            title: "Penthouse Standard",
            bedrooms: "3",
            bathroom: "3.5",
            size: "254 m² - 2734 feet",
            gallery: [
                "/img/tower-1-and-2/penthouse-estandard-1.jpg",
                "/img/tower-1-and-2/penthouse-estandard-2.jpg",
                "/img/tower-1-and-2/penthouse-estandard-3.jpg",
                "/img/tower-1-and-2/penthouse-estandard-4.jpg",
                "/img/tower-1-and-2/penthouse-estandard-5.jpg",
            ],
            plan: "/img/tower-1-and-2/Penthouse-standard-1.pdf",
            // interiorm: "146",
            // interiorsqf: "1571",
            // terracem: "248",
            // terracesqf: "2670",
        },
        {
            id: "3",
            title: "Corner",
            bedrooms: "2",
            bathroom: "2",
            size: "143 m² |1539.24 feet",
            gallery: [
                "/img/tower-1-and-2/san-miguel-standard-esquina-scaled.jpg",
                "/img/tower-1-and-2/corder-2.jpg",
                "/img/tower-1-and-2/corder-3.jpg",
                "/img/tower-1-and-2/penthouse-corner-4.jpg",
                "/img/tower-1-and-2/corder-5.jpg",
            ],
            plan: "/img/tower-1-and-2/apartment-corner-1.pdf",
            // interiorm: "140.5",
            // interiorsqf: "1512",
            // terracem: "78.5",
            // terracesqf: "845",
        },
        {
            id: "4",
            title: "Standard",
            bedrooms: "2",
            bathroom: "2",
            size: "105 m² | 1130.21 feet",
            gallery: [
                "/img/tower-1-and-2/Captura-de-Pantalla-2020-09-28-a-las-16.11.38.jpg",
                "/img/tower-1-and-2/san-miguel-standard-scaled.jpg",
                "/img/tower-1-and-2/standard-2.jpg",
                "/img/tower-1-and-2/standard-3.jpg",
                "/img/tower-1-and-2/standard-4.jpg",
            ],
            plan: "/img/tower-1-and-2/apartment-standard-1.pdf",
            // interiorm: "140.5",
            // interiorsqf: "1512",
            // terracem: "78.5",
            // terracesqf: "845",
        },
        {
            id: "5",
            title: "Loft",
            bedrooms: "1",
            bathroom: "1",
            size: "53 m² - 570.5 Feet",
            gallery: [
                "/img/tower-1-and-2/loft-1-scaled.jpg",
                "/img/tower-1-and-2/loft-2.jpg",
                "/img/tower-1-and-2/loft-3.jpg",
                "/img/tower-1-and-2/loft-4.jpg",
            ],
            plan: "/img/tower-1-and-2/apartment-loft-1.pdf",
            // interiorm: "140.5",
            // interiorsqf: "1512",
            // terracem: "78.5",
            // terracesqf: "845",
        },
    ];

    return (
        <>
            <div>
                <Image src="/img/tower-1-and-2/TORRE-1Y2-1300X400PX.jpg" className=' w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' />
            </div>

            <div className='container w-11/12 mx-auto mt-16'>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 mb-8 text-5xl text-center">IN THE EXCLUSIVE ZONE OF NUEVO VALLARTA</h1>
                    </div>
                    <div className=' mx-1 text-justify'>
                        <p>Quinta San Miguel Ocean & Canal is an exclusive development with unique taste, offering a private canal with slips area surrounded by luxury resorts, the finest restaurants and commercial centers. It is located in the most secure zone with the highest capital gain in Riviera Nayarit.</p>
                        <p>Part of our main philosophy is to create with less impact possible in our environment, by doing so we offer at the same time a home surrounded by natural scenery to our clients, part of the process is made by re-using metallic containers in our building structures. </p>
                        <p>But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 my-8 text-5xl text-center ">MASTER PLAN</h1>
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
                <RoomSwiper roomData={data} title="Our Room Types - SOLD OUT" />
            </div>



            <div className='h-[29rem] text-white w-full  flex justify-center flex-col relative ' style={{ background: "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/img/tower-1-and-2/slider.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
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
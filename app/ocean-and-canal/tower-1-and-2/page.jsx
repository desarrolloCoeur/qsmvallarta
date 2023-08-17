import Rooms from '@/components/tower-1-and-2/Rooms'
import ContacUs from '@/components/home/ContacUs'
import Image from 'next/image'
import React from 'react'


const page = () => {
    return (
        <>
            <div>
                <Image src="/img/tower-1-and-2/TORRE-1Y2-1300X400PX.jpg" className=' w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' />
            </div>

            <div className='lg:m-24 m-6'>
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
            </div>

            <Rooms />

            <div className='bg-[url(/img/tower-1-and-2/slider.jpg)] bg-cover h-[50dvh] bg-center text-white w-full mx-auto mt-6 '>
                    <div>
                        <h1 class="lg:px-24 mx-1 pt-8 text-center text-white">Why Quinta San Miguel ?</h1>
                    </div>
                    <div className='mx-auto text-center text-lg '>
                        <ul className='grid lg:grid-cols-3 grid-cols-1 pb-6 items-center'>
                            <li className='lg:m-6 m-1'>Private condominium</li>
                            <li className='lg:m-6 m-1'>Large space</li>
                            <li className='lg:m-6 m-1'>Multiple recreation center</li>
                            <li className='lg:m-6 m-1'>Location</li>
                            <li className='lg:m-6 m-1'>Comfort</li>
                            <li className='lg:m-6 m-1'>Investment</li>
                        </ul>
                    </div>
                </div>

            <ContacUs />
        </>
    )
}

export default page
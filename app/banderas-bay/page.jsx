import Rooms from '@/components/banderas-bay/Rooms'
import ContactUs from '@/components/home/ContacUs'
import Image from 'next/image'
import React from 'react'


const page = () => {
    return (
        <>
            <div>
                <Image src="/img/banderas-bay/header.jpg" className=' w-full object-cover' height={1920} width={1080} alt='Imagen de Banderas Bay' />
            </div>

            <div className='lg:m-24 m-6'>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 mb-8 text-center">Your new appartment in Quinta Banderas Bay</h1>
                    </div>
                    <div className=' mx-1 text-center'>
                        <p>Quinta Town Bucerias is a great development for those that love a Beach town. It's located in los Picos, 4 min away from Bucerias downtown and one block away from the beach.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 my-8 text-center">MASTER PLAN</h1>
                    </div>
                    <div className='mx-auto text-center text-ms'>
                        <ul>
                            <li className='m-1'>1 Towers</li>
                            <li className='m-1'>Exclusive Condos / Departments</li>
                            <li className='m-1'>Roof Top</li>
                            <li className='m-1'>Swimming pool</li>
                            <li className='m-1'>Underground parking</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Rooms />

            <div className='bg-[url(/img/banderas-bay/1_1-Foto-scaled.jpg)] bg-cover h-[50dvh] bg-center text-white w-full mx-auto mt-6 '>
                    <div>
                        <h1 class="lg:px-24 mx-1 pt-8 text-center">Amenities</h1>
                    </div>
                    <div className='mx-auto text-center text-lg '>
                        <ul className='grid lg:grid-cols-4 grid-cols-1 pb-6 items-center'>
                            <li className='lg:m-6 m-1'>Security 24/7</li>
                            <li className='lg:m-6 m-1'>Roof top</li>
                            <li className='lg:m-6 m-1'>Swimming Pool</li>
                            <li className='lg:m-6 m-1'>Underground Parking</li>
                            <li className='lg:m-6 m-1'>Access to the beach</li>
                        </ul>
                    </div>
                </div>

                <ContactUs />

        </>
    )
}

export default page
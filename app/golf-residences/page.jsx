import Rooms from '@/components/golf-residences/Rooms'
import ContactUs from '@/components/home/ContacUs'
import Image from 'next/image'
import React from 'react'


const page = () => {
    return (
        <>
            <div>
                <Image src="/img/golf-residences/home-golf.jpg" className=' w-full object-cover' height={1920} width={1080} alt='Imagen de Golf Residences' />
            </div>

            <div className='lg:m-24 m-6'>
                <div>
                    <div>
                        <h1 class="lg:px-24 mx-1 mb-8 text-center">COMBINING A HIGH LEVEL OF COMFORT WITH A TOUCH OF INNOVATION</h1>
                    </div>
                    <div className=' mx-1 text-center'>
                        <p>Natural light will pleasantly bathe the interiors, bringing you a wonderful feeling of spaciousness and freedom.</p>
                    </div>
                </div>
                <div className='bg-[#8c8c8c] text-white w-full mx-auto mt-6 '>
                    <div>
                        <h1 class="lg:px-24 mx-1 pt-8 text-center">THE PROJECT</h1>
                    </div>
                    <div className='mx-auto text-center text-lg '>
                        <ul className='grid lg:grid-cols-5 grid-cols-1 pb-6 items-center'>
                            <li className='lg:m-6 m-1'>16 Apartments</li>
                            <li className='lg:m-6 m-1'>9 Villas</li>
                            <li className='lg:m-6 m-1'>Double height lobby</li>
                            <li className='lg:m-6 m-1'>Palapa</li>
                            <li className='lg:m-6 m-1'>Pool with children's area</li>
                            <li className='lg:m-6 m-1'>Private covered parking</li>
                            <li className='lg:m-6 m-1'>Multi-purpose room</li>
                            <li className='lg:m-6 m-1'>Golf club</li>
                            <li className='lg:m-6 m-1'>Sports club house</li>
                            <li className='lg:m-6 m-1'>Beach club</li>
                            <li className='lg:m-6 m-1'>Security access</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Rooms />

            <ContactUs />

        </>
    )
}

export default page
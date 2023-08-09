import Rooms from '@/components/tower-1-and-2/Rooms'
import Image from 'next/image'
import React from 'react'


const page = () => {
    return (
        <>
            <div>
                <Image src="/img/tower-1-and-2/TORRE-1Y2-1300X400PX.jpg" className=' w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' />
            </div>

            <Rooms />
        </>
    )
}

export default page
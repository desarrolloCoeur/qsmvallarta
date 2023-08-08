import Amenities from '@/components/tower-5/Amenities'
import Rooms from '@/components/tower-5/Rooms'
import React from 'react'


const page = () => {
    return (
        <>

            <div className='bg-[url(/img/7.jpg)] bg-cover w-full h-[100dvh] flex items-center justify-center'>
                <h4 className='bg-main/90 text-white py-5 px-12 text-7xl'>TOWER 5</h4>
            </div>

            <Amenities />
            <Rooms />

        </>
    )
}

export default page
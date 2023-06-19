import Amenities from '@/components/tower-4/Amenities'
import Rooms from '@/components/tower-4/Rooms'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <>
    
      <div className='bg-[url(/img/hero.jpg)] bg-cover w-full h-[100dvh] flex items-center justify-center'>
        <h4 className='bg-main/90 text-white py-5 px-12 text-7xl'>TOWER 4</h4>
      </div>

      <Amenities />
      <Rooms />

    </>
  )
}

export default page
import React from 'react'
import Image from 'next/image'
import Rooms from '@/components/tower-garden/Rooms'
import Amenities from '@/components/tower-garden/Amenities'


const page = () => {
  return (
    <>
      <div className='bg-[url(/img/hero-garden.jpg)] bg-cover bg-bottom w-full h-[100dvh] flex items-center justify-center'>
        <h4 className='bg-main/90 text-white py-5 px-12 text-7xl'>GARDEN</h4>
      </div>
      
      {/* <KeyLocations/> */}
      <Amenities/>
      {/* <Rooms/> */}

      <div className='bg-[url(/img/hero-garden.jpg)] bg-cover bg-bottom w-full h-[60dvh] flex items-top justify-start'>
        <h4 className=' text-white py-5 px-12 text-5xl '>YOUR DREAM HOME IS WAITING FOR YOU</h4>
      </div>
    </>
  )
}

export default page
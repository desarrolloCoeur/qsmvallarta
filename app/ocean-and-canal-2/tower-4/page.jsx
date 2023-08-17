import ContacUs from '@/components/home/ContacUs'
import Amenities from '@/components/tower-4/Amenities'
import KeyLocations from '@/components/tower-4/KeyLocations'
import Rooms from '@/components/tower-4/Rooms'


const page = () => {
  return (
    <>
    
      <div className='bg-[url(/img/tower-4/tower4.webp)] bg-cover bg-center w-full h-[100dvh] flex items-center justify-center relative'>
        <h4 className='bg-main/90 text-white text-7xl absolute bottom-14 p-5'>TOWER 4</h4>
      </div>

      <div className='container w-11/12 mx-auto mt-16'> 
        <Amenities />
        <KeyLocations />
        <Rooms />
        <ContacUs className="mt-20"/>
      </div>

    </>
  )
}

export default page
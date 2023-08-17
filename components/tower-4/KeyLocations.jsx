import Image from 'next/image'
import React from 'react'

const KeyLocations = () => {
    const data = [
    {
        number : '1',
        name: 'Quinta San Miguel',
        color: '#228e7e'
    },
    {
        number : '2',
        name: 'Paradise Village Plaza',
        color: '#228e7e'
    },
    {
        number : '3',
        name: 'Hard Rock Hotel',
        color: '#228e7e'
    },
    {
        number : '5',
        name: 'Dry Rock',
        color: '#228e7e'
    },
    {
        number : '6',
        name: 'Grand Vela Resort',
        color: '#228e7e'
    },
    {
        number : '7',
        name: 'Channel Sea Access',
        color: '#228e7e'
    },
    {
        number : ' 8 ',
        name: ' San Javier Hospital',
        color: '#228e7e'
    },
    {
        number : '9',
        name: 'Beach',
        color: '#228e7e'
    },
    {
        number : '10',
        name: 'Marina Nuevo Vallarta',
        color: '#228e7e'
    } ,
    {
        number : '11',
        name: 'Marina Nuevo Vallarta',
        color: '#228e7e'
    } ,
    {
        number : '12',
        name: 'Marina Nuevo Vallarta',
        color: '#228e7e'
    } 
]

    return (
        <div className='mt-10'>
            <h1>Key Locations</h1>
            <div className='flex gap-5 flex-wrap xl:flex-nowrap'>
                <Image src="/img/tower-4/key-locations-tower-4.png" alt="" width={800} height={400} className='w-full xl:w-4/5'/>
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5 w-[95%] xl:w-1/3'>
                    {data.map((location,index) => {
                        return (
                            <div key={index} className='flex items-center gap-2'> 
                            <label className="flex items-center justify-center rounded-full p-3 text-regular w-8 h-8 text-white" style={{backgroundColor: `${location.color}`}}>{location.number}</label>
                            <p className='mb-0'>{location.name}</p>
                        </div>
                        )
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default KeyLocations
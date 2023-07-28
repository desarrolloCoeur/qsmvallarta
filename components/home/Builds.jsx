import Image from 'next/image'
import React from 'react'

const Builds = () => {
    const data = [
        {
            title: 'Golf',
            img : '/img/home-golf.jpg',
            thumb : '/img/home-golf.jpg'
        },
        {
            title: 'Ocean & Canal',
            img : '/img/home-ocean-canal.jpg',
            thumb : '/img/home-ocean-canal.jpg'
        },
        {
            title: 'Bucerias',
            img : '/img/OLLR-1-1-scaled.jpg',
            thumb : '/img/OLLR-1-1-scaled.jpg'
        }
        ,
        {
            title: 'Tower 4',
            img : '/img/5.webp',
            thumb : '/img/5.webp'
        }
        ,{
            title: 'Garden',
            img : '/img/garden.webp',
            thumb : '/img/garden.webp'
        }
        
    ]

  return (
    <div className="container w-11/12 mx-auto my-20">
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {
            data.map((t,i) => {
                return (
                    <div key={i} className='relative transition-all bg-[rgba(0,0,0,0.5)]'>
                        <Image src={t.thumb} alt={t.title} width={900} height={450} className='object-cover'/>
f                        <h3 className=' absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white uppercase'>{t.title}</h3>
                    </div>
                )
            })
        }

    </div>
  </div>
  )
}

export default Builds
import Tabs from '@/components/Tabs'
import React from 'react'

const tab = [
    {
        label : 'September',
        images : ['/img/tower-garden/2023/september/garden-september-1.jpg',
                '/img/tower-garden/2023/september/garden-september-2.jpg',
                '/img/tower-garden/2023/september/garden-september-3.jpg',
                '/img/tower-garden/2023/september/garden-september-4.jpg',
                '/img/tower-garden/2023/september/garden-september-5.jpg',
                '/img/tower-garden/2023/september/garden-september-6.jpg',
                '/img/tower-garden/2023/september/garden-september-7.jpg',
                '/img/tower-garden/2023/september/garden-september-8.jpg',
                ]
    },
]


const page = () => {
  return (
    <div className="pt-32 container mx-auto w-11/12">
        <h1 className="text-center lg:text-6xl text-4xl font-semibold">Work in Progress <br/> Garden</h1>
        <p className="text-xl font-bold uppercase">Year: 2023</p>
        <Tabs tabs={tab}/>
    </div>
  )
}

export default page
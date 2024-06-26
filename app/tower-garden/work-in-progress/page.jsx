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
    {
      label : 'October',
      images : ['/img/tower-garden/2023/october/garden-oct-1.webp',
                '/img/tower-garden/2023/october/garden-oct-2.webp',
                '/img/tower-garden/2023/october/garden-oct-3.webp',
                '/img/tower-garden/2023/october/garden-oct-4.webp',
                '/img/tower-garden/2023/october/garden-oct-5.webp',
                '/img/tower-garden/2023/october/garden-oct-6.webp',
                '/img/tower-garden/2023/october/garden-oct-7.webp',
                '/img/tower-garden/2023/october/garden-oct-8.webp',
                '/img/tower-garden/2023/october/garden-oct-9.webp',
                '/img/tower-garden/2023/october/garden-oct-10.webp',
                '/img/tower-garden/2023/october/garden-oct-11.webp',
                '/img/tower-garden/2023/october/garden-oct-12.webp',
                '/img/tower-garden/2023/october/garden-oct-13.webp',
                '/img/tower-garden/2023/october/garden-oct-14.webp',
                '/img/tower-garden/2023/october/garden-oct-15.webp',
                ]
  },
  {
    label : 'November',
    images : ['/img/tower-garden/2023/noviembre/avance-nov-garden-1.webp',
    '/img/tower-garden/2023/noviembre/avance-nov-garden-11.webp',
    '/img/tower-garden/2023/noviembre/avance-nov-garden-19.webp',
    '/img/tower-garden/2023/noviembre/avance-nov-garden-26.webp',
    '/img/tower-garden/2023/noviembre/avance-nov-garden-29.webp',
    '/img/tower-garden/2023/noviembre/avance-nov-garden-30.webp',
    '/img/tower-garden/2023/noviembre/avance-nov-garden-34.webp',
              ]
},
{
  label : 'December',
  images : ['/img/tower-garden/2023/diciembre/garden-dic-1.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-2.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-3.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-4.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-5.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-6.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-7.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-8.webp',
  '/img/tower-garden/2023/diciembre/garden-dic-9.webp',
  ]
},
]

const tabs2 = [
  {
    label : 'January',
    images : ['/img/tower-garden/2024/january/january-1.jpg',
    '/img/tower-garden/2024/january/january-2.jpg',
    '/img/tower-garden/2024/january/january-3.jpg',
    '/img/tower-garden/2024/january/january-4.jpg',
    '/img/tower-garden/2024/january/january-5.jpg',
    '/img/tower-garden/2024/january/january-6.jpg',
    '/img/tower-garden/2024/january/january-7.jpg',
    '/img/tower-garden/2024/january/january-8.jpg',
    '/img/tower-garden/2024/january/january-9.jpg',
      ]
  },
  {
    label : 'February',
    images : ['/img/tower-garden/2024/february/february-1.jpg',
    '/img/tower-garden/2024/february/february-2.jpg',
    '/img/tower-garden/2024/february/february-3.jpg',
    '/img/tower-garden/2024/february/february-4.jpg',
    '/img/tower-garden/2024/february/february-5.jpg',
    '/img/tower-garden/2024/february/february-6.jpg',
    '/img/tower-garden/2024/february/february-7.jpg',
    '/img/tower-garden/2024/february/february-8.jpg',
    '/img/tower-garden/2024/february/february-9.jpg',
      ]
  },
  {
    label : 'March',
    images : ['/img/tower-garden/2024/march/garden-march-1.jpg',
    '/img/tower-garden/2024/march/garden-march-2.jpg',
    '/img/tower-garden/2024/march/garden-march-3.jpg',
    '/img/tower-garden/2024/march/garden-march-4.jpg',
    '/img/tower-garden/2024/march/garden-march-5.jpg',
    '/img/tower-garden/2024/march/garden-march-6.jpg',
    '/img/tower-garden/2024/march/garden-march-7.jpg',
    '/img/tower-garden/2024/march/garden-march-8.jpg',
    '/img/tower-garden/2024/march/garden-march-9.jpg',
    '/img/tower-garden/2024/march/garden-march-10.jpg',
    '/img/tower-garden/2024/march/garden-march-11.jpg',
      ]
  },
  {
    label: 'April',
    images : [
      '/img/tower-garden/2024/april/garden-1.jpeg',
      '/img/tower-garden/2024/april/garden-2.jpeg',
      '/img/tower-garden/2024/april/garden-5.jpeg',
      '/img/tower-garden/2024/april/garden-7.jpeg',
      '/img/tower-garden/2024/april/garden-9.jpeg',
      '/img/tower-garden/2024/april/garden-11.jpeg',
      '/img/tower-garden/2024/april/garden-12.jpeg',
      '/img/tower-garden/2024/april/garden-13.jpeg',
      '/img/tower-garden/2024/april/garden-14.jpeg',
      '/img/tower-garden/2024/april/garden-15.jpeg',
      '/img/tower-garden/2024/april/garden-17.jpeg',
      '/img/tower-garden/2024/april/garden-18.jpeg',
      '/img/tower-garden/2024/april/garden-19.jpeg',
      '/img/tower-garden/2024/april/garden-20.jpeg',
      '/img/tower-garden/2024/april/garden-21.jpeg',
      '/img/tower-garden/2024/april/garden-22.jpeg',
    ]
  },
  {
    label: 'May',
    images : [
      '/img/tower-garden/2024/may/tower-garden-1.jpg',
      '/img/tower-garden/2024/may/tower-garden-2.jpg',
      '/img/tower-garden/2024/may/tower-garden-3.jpg',
      '/img/tower-garden/2024/may/tower-garden-4.jpg',
      '/img/tower-garden/2024/may/tower-garden-5.jpg',
      '/img/tower-garden/2024/may/tower-garden-6.jpg',
      '/img/tower-garden/2024/may/tower-garden-7.jpg',
    ]
  }
]


const page = () => {
  return (
    <div className="pt-32 container mx-auto w-11/12">
        <h1 className="text-center lg:text-6xl text-4xl font-semibold">Work in Progress <br/> Garden</h1>
        <p className="text-xl font-bold uppercase">Year: 2024</p>
        <Tabs tabs={tabs2}/>
        <p className="text-xl font-bold uppercase mt-10">Year: 2023</p>
        <Tabs tabs={tab}/>
    </div>
  )
}

export default page
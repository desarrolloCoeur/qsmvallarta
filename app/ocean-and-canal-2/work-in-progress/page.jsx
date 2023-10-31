import Tabs from "@/components/Tabs"

const tab = [
    {
        label : 'September',
        images : ['/img/ocean-canal-2/2023/septiembre/septiembre-2023-1.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-2.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-3.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-4.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-6.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-7.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-8.jpg','/img/ocean-canal-2/2023/septiembre/septiembre-2023-9.jpg']
    },
    {
        label : 'October',
        images : ['/img/ocean-canal-2/2023/octubre/tower4-oct-1.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-2.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-3.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-4.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-5.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-6.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-7.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-8.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-9.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-10.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-11.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-12.webp','/img/ocean-canal-2/2023/octubre/tower4-oct-13.webp']
    },
    {
        label : 'November',
        images : ['/img/ocean-canal-2/2023/noviembre/avance-nov-ocean-and-canal-2-11.webp',
        '/img/ocean-canal-2/2023/noviembre/avance-nov-ocean-and-canal-2-18.webp',
        '/img/ocean-canal-2/2023/noviembre/avance-nov-ocean-and-canal-2-25.webp',
        '/img/ocean-canal-2/2023/noviembre/avance-nov-ocean-and-canal-2-30.webp',
        '/img/ocean-canal-2/2023/noviembre/avance-nov-ocean-and-canal-2-40.webp',
    ]
    },
]

const page = () => {
    return (
        <div className="pt-32 container mx-auto w-11/12">
            <h1 className="text-center lg:text-6xl text-4xl font-semibold">Work in Progress <br/> Ocean & Canal 2</h1>
            <p className="text-xl font-bold uppercase">Year: 2023</p>
            <Tabs tabs={tab}/>
        </div>


    )
}

export default page
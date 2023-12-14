import Tabs from "@/components/Tabs"

const tab = [
    {
        label : 'Early',
        images : ['/img/work-in-progress/2020/early/avance-1.jpg',
        '/img/work-in-progress/2020/early/avance-2.jpg',
        '/img/work-in-progress/2020/early/avance-3.jpg',
        '/img/work-in-progress/2020/early/avance-4.jpg',
        '/img/work-in-progress/2020/early/avance-6.jpg']
    },
    {
        label : 'Octubre',
        images : ['/img/work-in-progress/2020/octubre/working-october.jpg',
        '/img/work-in-progress/2020/octubre/working-october-2.jpg',]
    },
    {
        label : 'Noviembre',
        images : ['/img/work-in-progress/2020/noviembre/wip-noviembre-1.jpg',
        '/img/work-in-progress/2020/noviembre/wip-noviembre-2.jpg',
        '/img/work-in-progress/2020/noviembre/wip-noviembre-3.jpg',
        '/img/work-in-progress/2020/noviembre/wip-noviembre-4.jpg',]
    },
    {
        label : 'Diciembre',
        images : ['/img/work-in-progress/2020/diciembre/wip-diciembre-1.jpg',
        '/img/work-in-progress/2020/diciembre/wip-diciembre-2.jpg',
        '/img/work-in-progress/2020/diciembre/wip-diciembre-3.jpg']
    },
]

const page = () => {
    return (
        <div className="pt-32 container mx-auto w-11/12">
            <h1 className="text-center lg:text-6xl text-4xl font-semibold">Work in Progress <br/> Ocean & Canal 1</h1>
            <p className="text-xl font-bold uppercase">Year: 2020</p>
            <Tabs tabs={tab}/>
        </div>


    )
}

export default page
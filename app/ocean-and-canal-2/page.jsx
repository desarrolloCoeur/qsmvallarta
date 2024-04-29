import BuildingCard from '@/components/ui/BuildingCard'
import BuildingHero from '@/components/ui/BuildingHero'
import VideoAutoplayOcean from '@/components/ui/VideoAutoplayOceanTwo'
import Image from 'next/image'


const page = () => {
    return (
        <>
            <div className='hidden md:block'>
                <VideoAutoplayOcean />
            </div>
            <div>
                <Image src="/img/11.webp" width={1920} height={1080} alt='' className='md:hidden'/>
            </div>

            <div className="lg:mx-24 mx-6 lg:pt-12 pt-6 mb-14">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                    <BuildingCard background="/img/tower-4/tower4-2.webp" title="Tower 4" href="/ocean-and-canal-2/tower-4"/>                    
                    <BuildingCard background="/img/7.jpg" title="Tower 5" href="/ocean-and-canal-2/tower-5"/>                    
                </div>
            </div>
        </>
    )
}

export default page
import BuildingCard from '@/components/ui/BuildingCard'
import BuildingHero from '@/components/ui/BuildingHero'
import React from 'react'


const page = () => {
    return (
        <>
            <BuildingHero background="/img/home-ocean-canal.jpg" title="Ocean & Canal 2"/>

            <div class="lg:mx-24 mx-6 lg:pt-12 pt-6 mb-14">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                    <BuildingCard background="/img/5.webp" title="Tower 4" href="/ocean-and-canal-2/tower-4"/>                    
                    <BuildingCard background="/img/7.jpg" title="Tower 5" href="/ocean-and-canal-2/tower-5"/>                    
                </div>
            </div>
        </>
    )
}

export default page
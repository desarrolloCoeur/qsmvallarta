import BuildingCard from '@/components/ui/BuildingCard'
import BuildingHero from '@/components/ui/BuildingHero'
import React from 'react'


const page = () => {
    return (
        <>
            <BuildingHero background="/img/ocean-and-canal-hero.jpg" title="Ocean & Canal"/>

            <div class="lg:mx-24 mx-6 lg:pt-12 pt-6 mb-14">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                    <BuildingCard background="/img/ocean-and-canal-hero.jpg" title="Tower 1 & 2" href="/ocean-and-canal/tower-1-and-2"/>                    
                    <BuildingCard background="/img/7.jpg" title="Tower 3" href="/ocean-and-canal/tower-3"/>                    
                </div>
            </div>
        </>
    )
}

export default page
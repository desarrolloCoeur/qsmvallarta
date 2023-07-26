import Galery from '@/components/ocean-canal-2/Galery'
import Image from 'next/image'
import React from 'react'


const page = () => {
    return (
        <>

            <div className='bg-[url(/img/home-ocean-canal.jpg)] bg-cover w-full h-[100dvh] p-12'>
                <h4 className='bg-main/90 text-white py-5 px-12 lg:text-7xl text-3xl inline-block'>Ocean & Canal 2</h4>
            </div>

            <div class="lg:mx-24 mx-6 lg:pt-12 pt-6">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 ">                    
                    <div>
                        <figure class="relative cursor-pointer">
                            <Image src="/img/5.webp" alt="" height={600} width={700} />
                            <div class="absolute top-0 w-full h-full hover:bg-zinc-900/70 bg-zinc-900/40 text-center">
                                <h3 class="font-semibold text-white lg:pt-44 pt-24 text-4xl">TOWER 4</h3>
                            </div>
                        </figure>
                    </div>
                    <div>
                        <figure class="relative cursor-pointer">
                            <Image src="/img/7.jpg" alt="" height={600} width={700} />
                            <div class="absolute top-0 w-full h-full hover:bg-zinc-900/70 bg-zinc-900/40 text-center">
                                <h3 class="font-semibold text-white lg:pt-44 pt-24 text-4xl">TOWER 5</h3>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

            <Galery/>
        </>
    )
}

export default page
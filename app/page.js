import Image from 'next/image'
import React from 'react'
import ContactUs from '@/components/ContacUs'
import Builds from '@/components/Builds'



export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Image src="/img/1.webp" className='h-[100dvh] w-full object-cover'  height={1920} width={1080} alt='Imagen de Quinta San Miguel'/>
        </div>

        <div className="container w-11/12 mx-auto max-w-[900px]  py-20">
          <h1 className="text-center">Quinta San Miguel <br></br>Real Estate Group</h1>
          <div className="text-left">
            <p>Welcome to Quinta San Miguel Real Estate Group, we are a relatively young company whose vision focuses on building real estate developments that offers great comfort, exclusiveness, and security among anything for your loved ones, our projects are being developed within the regions of Riviera Nayarit and Puerto Vallarta.</p>
            <p>Part of our main philosophy is to create with less impact possible in our environment, by doing so we offer at the same time a home surrounded by natural scenery to our clients, part of the process is made by re-using metallic containers in our building structures.</p>
            <p>But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>
          </div>
        </div>

        <Builds />

        <ContactUs />


      </div>
    </main>
  )
}

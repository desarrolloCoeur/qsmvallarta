import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import ContactUs from '@/components/home/ContacUs'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Image src="/img/2-1-scaled.jpg" className='h-[100dvh] w-full object-cover'  height={1920} width={1080} />
        </div>

        <div class="lg:mx-32 mx-6 lg:py-24 py-6">
          <div class="lg:text-justify text-left">
            <h3 class="m-6 text-center lg:text-7xl text-3xl font-semibold">Quinta San Miguel Real Estate Group</h3>
            <p class="font-light lg:text-xl text-lg my-3 mx-8 ">Welcome to Quinta San Miguel Real Estate Group, we are a relatively young company whose vision focuses on building real estate developments that offers great comfort, exclusiveness, and security among anything for your loved ones, our projects are being developed within the regions of Riviera Nayarit and Puerto Vallarta.</p>
            <p class="font-light lg:text-xl text-lg my-3 mx-8">Part of our main philosophy is to create with less impact possible in our environment, by doing so we offer at the same time a home surrounded by natural scenery to our clients, part of the process is made by re-using metallic containers in our building structures.</p>
            <p class="font-light lg:text-xl text-lg my-3 mx-8">But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>
          </div>
        </div>

        <div class="lg:mx-40 mx-6 lg:py-24 py-6">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
            <div>
              <figure class="relative cursor-pointer">
                <Image src="/img/home-golf.jpg" alt="" height={600} width={700} />
                <div class="absolute top-0 w-full h-full hover:bg-zinc-900/70 bg-zinc-900/40 text-center">
                  <h3 class="font-semibold text-white lg:pt-44 pt-24 text-4xl">GOLF</h3>
                </div>
              </figure>
            </div>
            <div>
              <figure class="relative cursor-pointer">
                <Image src="/img/home-ocean-canal.jpg" alt="" height={600} width={700} />
                <div class="absolute top-0 w-full h-full hover:bg-zinc-900/70 bg-zinc-900/40 text-center">
                  <h3 class="font-semibold text-white lg:pt-44 pt-24 text-4xl">OCEAN & CANAL</h3>
                </div>
              </figure>
            </div>
            <div>
              <figure class="relative cursor-pointer">
                <Image src="/img/OLLR-1-1-scaled.jpg" alt="" height={600} width={700} />
                <div class="absolute top-0 w-full h-full hover:bg-zinc-900/70 bg-zinc-900/40 text-center">
                  <h3 class="font-semibold text-white lg:pt-44 pt-24 text-4xl">BUCERIAS</h3>
                </div>
              </figure>
            </div>
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
                <Image src="/img/garden.webp" alt="" height={600} width={700} />
                <div class="absolute top-0 w-full h-full hover:bg-zinc-900/70 bg-zinc-900/40 text-center">
                  <h3 class="font-semibold text-white lg:pt-44 pt-24 text-4xl">GARDEN</h3>
                </div>
              </figure>
            </div>
          </div>
        </div>


        <div class="lg:mx-32 mx-6 lg:py-24 py-6 text-lg">
          <div class="flex justify-center">
            <div class="flex">
              <h3 class="text-6xl font-light mb-10">Contact</h3>
              <h3 class="text-6xl font-light mb-10 ml-3"><strong> Us</strong></h3>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-3 lg:w-3/5 w-4/5 mx-auto block">
            <div>
              <h3 class="font-medium py-3">Name</h3>
              <input class="border border-solid border-gray-300 rounded w-full h-10" type="text" />
            </div>
            <div>
              <h3 class="font-medium py-3">Email</h3>
              <input class="border border-solid border-gray-300 rounded w-full h-10" type="email" />
            </div>

          </div>
          <div class="lg:w-3/5 w-4/5 mx-auto block">
            <h3 class="font-medium py-3">Message</h3>
            <textarea class="border border-solid border-gray-300 rounded w-full" cols="30" rows="6"></textarea>
            <div class="py-6">
              <button class="border border-solid border-[#b0a49c] h-12 w-24 rounded hover:text-white hover:bg-[#b0a49c] font-normal tracking-wide">Send</button>
            </div>
          </div>
        </div>


      </div>
    </main>
  )
}

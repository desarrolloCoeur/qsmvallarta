'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image'
import ContactUs from '@/components/ContacUs'
import Builds from '@/components/Builds'

const data = [
  {
    title: "Quinta San Miguel Golf",
    location : "Nuevo Vallarta, Riviera Nayarit",
    img : "/img/grupo-amg/1.webp"
  },
  {
    title: "Casa Marina",
    location : "El Tigre Golf Course, Riviera Nayarit",
    img : "/img/grupo-amg/2.webp"
  },
  {
    title: "Casa Regina",
    location : "El Tigre Golf Course, Riviera Nayarit",
    img : "/img/grupo-amg/3.webp"
  },
  {
    title: "Casa Lisboa",
    location : "El Tigre Golf Course, Riviera Nayarit",
    img : "/img/grupo-amg/4.webp"
  },
  {
    title: "Oficinas Paradise Village",
    location : "El Tigre Golf Course, Riviera Nayarit",
    img : "/img/grupo-amg/5.webp"
  },
  {
    title: "Casa 48",
    location : "El Tigre Golf Course, Riviera Nayarit",
    img : "/img/grupo-amg/6.webp"
  },
  {
    title: "Container Inn",
    location : "Puerto Vallarta, México",
    img : "/img/grupo-amg/7.webp"
  },
  {
    title: "Quinta San Miguen Ocean and Canal",
    location : "Paseo de los Cocoteros, Nuevo Vallarta, Nayarit",
    img : "/img/grupo-amg/8.webp"
  },
  {
    title: "Quinta Banderas Bay",
    location : "Paseo de los Cocoteros, Nuevo Vallarta, Nayarit",
    img : "/img/grupo-amg/9.webp"
  },
  {
    title: "Quinta San Miguel Garden",
    location : "Paseo de las Moras, Nuevo Vallarta, Nayarit",
    img : "/img/grupo-amg/10.webp"
  },
  {
    title: "Quinta San Miguel Ocean and Canal II",
    location : "Paseo de los Cocoteros, Nuevo Vallarta, Nayarit",
    img : "/img/grupo-amg/11.webp"
  },
  {
    title: "Casan Vistas Lagos",
    location : "Vista Lagos, El Tigre, Nuevo Nyarit",
    img : "/img/grupo-amg/12.webp"
  }
]



export default function Home() {
  return (
    <main>
      <div>
        <Swiper navigation={true} modules={[Autoplay, Navigation]} autoplay={{
            delay: 3500,
            disableOnInteraction: false,}} className="mySwiper">
          <SwiperSlide><Image src="/img/11.webp" className='h-[100dvh] w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' /></SwiperSlide>
          <SwiperSlide><Image src="/img/7.webp" className='h-[100dvh] w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' /></SwiperSlide>
          <SwiperSlide><Image src="/img/9.webp" className='h-[100dvh] w-full object-cover' height={1920} width={1080} alt='Imagen de Quinta San Miguel' /></SwiperSlide>
        </Swiper>

        <div className="container w-11/12 mx-auto max-w-[900px]  py-20">
          <h1 className="text-center">Quinta San Miguel <br></br>Real Estate Group</h1>
          <div className="text-left">
            <p>Welcome to Quinta San Miguel Real Estate Group, we are a relatively young company whose vision focuses on building real estate developments that offers great comfort, exclusiveness, and security among anything for your loved ones, our projects are being developed within the regions of Riviera Nayarit and Puerto Vallarta.</p>
            <p>Part of our main philosophy is to create with less impact possible in our environment, by doing so we offer at the same time a home surrounded by natural scenery to our clients, part of the process is made by re-using metallic containers in our building structures.</p>
            <p>But we really like you to visit each of our developments sites, we know that you will find the perfect place to start living your dreams in this special region of our great Mexico.</p>
          </div>
        </div>

        <Builds />


        <section className='container w-11/12 mx-auto my-20'>
          <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div>
              <div>
                <Image src="/img/amgm-constructores.png" className='mx-auto' height={50} width={200} alt='AMGM Constructores'/>
              </div>
              <div className='text-align-custom text-center my-6 lg:px-20 px-6'>
                <p className='tracking-wide text-sm font-normal pb-3 uppercase'>Compromiso | Calidad | Ecología | Vanguardia</p>
                <p className='font-thin text-base'><b className='font-semibold'>AMGM Constructores </b>es la empresa con más experiencia en México dedicada a compra-venta y transformación de contenedores en espacios ecológicos y modernos, respaldada por sus 15 años de funcionamiento. <br /> <br />
                  Al día de hoy hemos crecido y nos hemos
                  consolidado como una familia inmobiliaria
                  solida, respaldada por la construcción de mas
                  de 15 casas, un hotel, oficinas, y complejos
                  habitacionales con torres departamentales.</p>
              </div>
            </div>
            <div>
              <Image src="/img/grupo-amg.webp" height={1920} width={1080} alt='AMGM Constructores'/>
            </div>
          </div>
        </section>



        <section className='container w-11/12 mx-auto my-20'>
          <h2 className='pb-6 uppercase'>Galeria de construcciones</h2>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper" breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            
          }}>

            {data.map((location,index) => (
              <SwiperSlide key={index}  >
              <div className={`h-72 relative rounded-md w-full`} style={{backgroundImage: `url(${location.img})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
              <div class="absolute inset-0 bg-transparent from-black/40 to-black/0 bg-gradient-to-t"></div>
                <div className="absolute bottom-5 left-5 flex flex-col gap-2 items-start">
                  <h4 className="text-xl uppercase text-white font-extrabold text-left">{location.title}</h4>
                  <p className='text-white font-thin uppercase text-xs '>{location.location}</p>
                </div>
              </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </section>

        <ContactUs />


      </div>
    </main>
  )
}

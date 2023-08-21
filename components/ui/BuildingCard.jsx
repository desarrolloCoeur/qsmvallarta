import Image from "next/image"
import Link from "next/link"

const BuildingCard = ({background, title, href}) => {
  return (
    <Link href={href} className="relative">
        <Image src={background} alt={title} width={900} height={450} className='object-cover w-full h-full'/>
        <h3 className=' transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white uppercase bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)]'>{title}</h3>
    </Link>
  )
}

export default BuildingCard
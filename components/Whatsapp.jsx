import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <Link href="https://wa.me/523223735781" target="_blank">
        <div className='fixed bottom-3 right-3 z-10 bg-main text-white flex items-center gap-2 p-3 rounded-md text-xl font-semibold'>
            <FaWhatsapp />
            WhatsApp
        </div>
    </Link>
  )
}

export default Whatsapp
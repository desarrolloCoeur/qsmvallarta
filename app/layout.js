import Footer from '../components/ui/Footer.jsx'
import Header from '../components/ui/Header.jsx'
import { Inter,Amiri, Noto_Sans } from 'next/font/google'
 

import './globals.css';
import Whatsapp from '@/components/Whatsapp.jsx';

const inter = Inter({ subsets: ['latin'],  })
const amiri = Amiri({subsets : ['latin'], weight : ['400'], variable : '--font-amiri'})
const noto = Noto_Sans({subsets : ['latin'], weight : ['100','200','300','400','500','600','700','800','900'], variable : '--font-noto'})


export const metadata = {
  title: 'QSM Vallarta',
  description: 'Torres en puerto vallarta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${noto.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  )
}

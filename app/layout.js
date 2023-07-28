import Footer from '../components/ui/Footer.jsx'
import Header from '../components/ui/Header.jsx'
import { Inter,Amiri } from 'next/font/google'
 

import './globals.css';

const inter = Inter({ subsets: ['latin'],  })
const amiri = Amiri({subsets : ['latin'], weight : ['400'], variable : '--font-amiri'})


export const metadata = {
  title: 'QSM Vallarta',
  description: 'Torres en puerto vallarta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${amiri.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

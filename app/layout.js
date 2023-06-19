import Footer from '../components/ui/Footer.jsx'
import Header from '../components/ui/Header.jsx'
import './globals.css';


export const metadata = {
  title: 'QSM Vallarta',
  description: 'Torres en puerto vallarta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

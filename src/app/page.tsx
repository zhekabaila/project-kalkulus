import Explanation from '@/components/layouts/sections/Explanation'
import Calculator from '@/components/layouts/sections/Calculator'
import Members from '@/components/layouts/sections/Teams'
import Navbar from '@/components/layouts/sections/Navbar'
import Footer from '@/components/layouts/sections/Footer'
import About from '@/components/layouts/sections/About'
import Hero from '@/components/layouts/sections/Hero'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Trignonemetry',
  description: 'Trignonemetry',
}

export default function Home() {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-secondary dark:bg-shadow`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Explanation />
          <Calculator />
          <Members />
        </main>
        <Footer />
      </body>
    </html>
  )
}

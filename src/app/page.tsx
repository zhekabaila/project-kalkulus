import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import './globals.css'

const Hero = dynamic(() => import('@/components/layouts/sections/Hero'))
const About = dynamic(() => import('@/components/layouts/sections/About'))
const Footer = dynamic(() => import('@/components/layouts/sections/Footer'))
const Navbar = dynamic(() => import('@/components/layouts/sections/Navbar'))
const Teams = dynamic(() => import('@/components/layouts/sections/Teams'))
const Calculator = dynamic(
  () => import('@/components/layouts/sections/Calculator')
)
const Explanation = dynamic(
  () => import('@/components/layouts/sections/Explanation')
)
const Technologies = dynamic(
  () => import('@/components/layouts/sections/Technologies')
)
const Questions = dynamic(
  () => import('@/components/layouts/sections/Questions')
)
const OtherProjects = dynamic(
  () => import('@/components/layouts/sections/OtherProjects')
)

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
          <Questions />
          <Technologies />
          <Teams />
          <OtherProjects />
        </main>
        <Footer />
      </body>
    </html>
  )
}

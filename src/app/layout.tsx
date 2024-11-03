import { Poppins } from 'next/font/google'
import Navbar from '@/components/layouts/sections/Navbar'
import Footer from '@/components/layouts/sections/Footer'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-[#e9e9f2]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

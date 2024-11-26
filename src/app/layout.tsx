import { ThemeProvider } from '@/contexts/themeContext'
import { keywords } from '@/constant/keywords'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import './globals.css'
import Script from 'next/script'

const Footer = dynamic(() => import('@/components/layouts/sections/Footer'))
const Navbar = dynamic(() => import('@/components/layouts/sections/Navbar'))

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Trignonemetry',
  description:
    'Panduan lengkap mengenai fungsi trigonometri yang mencakup penjelasan tentang fungsi dasar seperti sinus, cosinus, dan tangen. Situs ini menyediakan rumus-rumus penting, grafik fungsi, contoh soal, serta kalkulator interaktif yang dapat memudahkan anda.',
  alternates: {
    canonical: 'https://trigonometri.vercel.app/',
  },
  applicationName: 'Trigonometri',
  abstract:
    'Website ini adalah website pembelajaran tentang materi Trigonometri. Di website ini, memiliki penjelasan berbentuk teks hingga video. Dan juga dapat mengerjakan soal yang telah disediakan.',
  assets: 'https://trigonometri.vercel.app/images',
  category: 'Website Pembelajaran',
  icons: 'https://trigonometri.vercel.app/logo/main-logo-dark.png',
  authors: [
    {
      name: 'Zheka Baila Arkan',
      url: 'https://zhekabaila.vercel.app/',
    },
    {
      name: 'Rakha Aji Mulia',
      url: 'https://instagram.com/ryuzaki_rakha',
    },
    {
      name: 'Muhammad Fawwazul Haq',
      url: 'https://instagram.com/fawwazulhqq',
    },
    {
      name: 'Muhammad Alif Akhdan Tsani',
      url: 'https://instagram.com/alifakhdann',
    },
  ],
  creator: 'Kelompok 8 Trigonometri',
  generator: 'Next.js',
  keywords: keywords,
  openGraph: {
    type: 'website',
    url: 'https://trigonometri.vercel.app/',
    title: 'Trigonometri',
    description:
      'Panduan lengkap mengenai fungsi trigonometri yang mencakup penjelasan tentang fungsi dasar seperti sinus, cosinus, dan tangen. Situs ini menyediakan rumus-rumus penting, grafik fungsi, contoh soal, serta kalkulator interaktif yang dapat memudahkan anda.',
    images: [
      {
        url: 'https://trigonometri.vercel.app/images/thumbnail.jpg',
        width: 1200,
        height: 628,
      },
    ],
  },
  publisher: 'Vercel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <Script
          type="text/javascript"
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        />
        <body
          className={`${poppins.className} antialiased bg-secondary dark:bg-shadow max-w-[2400px] mx-auto`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  )
}

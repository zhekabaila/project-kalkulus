import { ThemeProvider } from '@/contexts/themeContext'
import { Poppins } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import Script from 'next/script'

import type { Metadata, Viewport } from 'next'

const APP_NAME = 'Trigonometri Application'
const APP_DEFAULT_TITLE = 'Welcome to Trigonometri'
const APP_TITLE_TEMPLATE = '%s - Trigonometri'
const APP_DESCRIPTION =
  'Panduan lengkap mengenai fungsi trigonometri yang mencakup penjelasan tentang fungsi dasar seperti sinus, cosinus, dan tangen. Situs ini menyediakan rumus-rumus penting, grafik fungsi, contoh soal, serta kalkulator interaktif yang dapat memudahkan anda.'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
}

const Footer = dynamic(() => import('@/components/layouts/sections/Footer'))
const Navbar = dynamic(() => import('@/components/layouts/sections/Navbar'))

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

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

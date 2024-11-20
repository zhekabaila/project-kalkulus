/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useTheme } from '@/contexts/themeContext'

import Link from 'next/link'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const Hero = () => {
  const { darkMode } = useTheme()
  return (
    <section
      className="relative flex items-center justify-center h-screen px-4 pt-32 pb-20 lg:p-36"
      id="hero"
    >
      <div
        className="relative size-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/images/${
            darkMode ? 'wave-dark.svg' : 'wave.svg'
          }')`,
        }}
      >
        <div className="flex flex-col items-center justify-center bg-slate-300/20 dark:bg-gray-600/20 backdrop-blur-md rounded-2xl size-full border-2 border-slate-400/20 dark:border-gray-600/30 p-4 lg:p-0">
          <h1 className="flex flex-col justify-center items-center gap-1 lg:gap-3 text-center font-medium text-3xl lg:text-[3.5vw] leading-tight dark:text-sun">
            <p>Selamat Datang Di</p>
            <p>
              <span className="text-blue-500 dark:text-jeruk">Website</span>{' '}
              Kami!
            </p>
          </h1>
          <p className="text-sm lg:text-base text-center mt-4 lg:mt-8 dark:text-sun lg:max-w-5xl mx-auto">
            Panduan lengkap mengenai fungsi trigonometri yang mencakup
            penjelasan tentang fungsi dasar seperti sinus, cosinus, dan tangen.
            Situs ini menyediakan rumus-rumus penting, grafik fungsi, contoh
            soal, serta kalkulator interaktif yang dapat memudahkan anda.
          </p>
          <div className="flex items-center justify-center gap-x-6 mt-6">
            <Link
              href="#tentang"
              className="flex items-center gap-x-3 bg-blue-500 dark:bg-jeruk border border-blue-500 dark:border-jeruk px-3 lg:px-4 py-2 lg:py-3 rounded-full"
            >
              <p className="text-white text-sm lg:text-lg font-medium">
                Jelajahi
              </p>
              <IoArrowDownCircleOutline
                size={24}
                className="size-3 lg:size-6"
                color="#ffffff"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

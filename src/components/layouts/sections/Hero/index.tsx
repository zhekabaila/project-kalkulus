import Image from 'next/image'
import Link from 'next/link'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen p-36"
      id="hero"
    >
      <div className="relative size-full">
        <div className="absolute bottom-0 right-0 -z-40">
          <Image
            src="/images/cube-pyramid.svg"
            alt="asd"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute top-0 right-0 -z-40 rotate-180">
          <Image src="/images/ball.svg" alt="asd" width={500} height={500} />
        </div>
        <div className="absolute bottom-0 left-0 -z-40">
          <Image src="/images/ball.svg" alt="asd" width={500} height={500} />
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-500/10 backdrop-blur-lg rounded-2xl size-full border-2 border-gray-500/20">
          <h1 className="text-center font-medium text-7xl leading-tight">
            Selamat Datang Di <br />
            <span className="text-blue-500">Website</span> Kami!
          </h1>
          <p className="text-base text-center mt-8 max-w-5xl mx-auto">
            Panduan lengkap mengenai fungsi trigonometri yang mencakup
            penjelasan tentang fungsi dasar seperti sinus, cosinus, dan tangen.
            Situs ini menyediakan rumus-rumus penting, grafik fungsi, contoh
            soal, serta kalkulator interaktif yang dapat memudahkan anda.
          </p>
          <div className="flex items-center justify-center gap-x-6 mt-6">
            <Link
              href="#tentang"
              className="flex items-center gap-x-3 bg-blue-500 border border-blue-500 px-5 py-3 rounded-full"
            >
              <p className="text-white text-lg font-medium">Jelajahi</p>
              <IoArrowDownCircleOutline size={24} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

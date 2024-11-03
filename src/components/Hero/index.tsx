import Image from 'next/image'
import Link from 'next/link'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import { TbMath, TbMathFunction } from 'react-icons/tb'
import { TbMathMaxMin } from 'react-icons/tb'
import { PiMathOperations } from 'react-icons/pi'

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen px-36">
      <div className="absolute top-0 left-0 -z-40">
        <Image src="/icons/split.svg" width={200} height={200} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 -z-40 rotate-180">
        <Image src="/icons/split.svg" width={200} height={200} alt="" />
      </div>
      <div className="absolute bottom-32 right-32 -z-40 -rotate-[20deg]">
        <TbMath size={40} color="#3b82f6" />
      </div>
      <div className="absolute bottom-32 left-32 -z-40 -rotate-[20deg]">
        <TbMathMaxMin size={40} color="#3b82f6" />
      </div>
      <div className="absolute top-32 right-32 -z-40 -rotate-[20deg]">
        <PiMathOperations size={40} color="#3b82f6" />
      </div>
      <div className="absolute top-32 left-36 -z-40 -rotate-[20deg]">
        <TbMathFunction size={40} color="#3b82f6" />
      </div>

      <div>
        <h1 className="text-center font-medium text-8xl leading-tight">
          Selamat Datang Di <br />
          <span className="text-blue-500">Website</span> Kami!
        </h1>
        <p className="text-lg text-center mt-8 max-w-5xl mx-auto">
          Pelajari konsep fungsi Trigonometri dengan mudah dan menyenangkan!
          Kami menyediakan penjelasan lengkap, contoh soal, dan kalkulator
          interaktif untuk membantu Anda memahami materi trigonometri dalam
          kalkulus secara menyeluruh.
        </p>
        <div className="flex items-center justify-center gap-x-6 mt-6">
          <Link
            href="#tentang"
            className="flex items-center gap-x-3 bg-blue-500 border border-blue-500 px-5 py-3 rounded-full"
          >
            <p className="text-white text-lg font-medium">Jelajahi</p>
            <IoArrowDownCircleOutline size={24} color="#ffffff" />
          </Link>
          {/* <Link href="#" className="bg-transparent border border-blue-500 px-5 py-3 rounded-full">
            <p className="text-black text-lg font-medium">Jelajahi</p>
          </Link> */}
        </div>
      </div>
    </section>
  )
}

export default Hero

import Image from 'next/image'

const About = () => {
  return (
    <section
      className="relative flex items-center justify-center px-36 h-screen border-t-4 border-t-blue-500"
      id="tentang"
    >
      <div className="absolute top-0 right-0 -z-40 rotate-180 transform scale-y-[-1]">
        <Image src="/icons/split.svg" width={200} height={200} alt="" />
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold">Tentang</h2>
        <div className="grid grid-cols-2 gap-x-10">
          <div className="mt-24">
            <h3 className="text-2xl font-medium text-blue-500">
              Latar Belakang
            </h3>
            <p className="text-lg font-medium mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, eos sequi! Fuga culpa tenetur ut. Nesciunt sint
              temporibus laudantium consectetur, quam vero ut enim ipsa deleniti
              cupiditate quasi. Tempora sequi accusantium consequatur odit!
              Distinctio minima eaque ipsum, animi accusantium aut?
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-medium text-blue-500">
              Fungsi Website
            </h3>
            <p className="text-lg font-medium mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, eos sequi! Fuga culpa tenetur ut. Nesciunt sint
              temporibus laudantium consectetur, quam vero ut enim ipsa deleniti
              cupiditate quasi. Tempora sequi accusantium consequatur odit!
              Distinctio minima eaque ipsum, animi accusantium aut?
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-medium text-blue-500">
              Ada Apa Saja Di sini?
            </h3>
            <p className="text-lg font-medium mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, eos sequi! Fuga culpa tenetur ut. Nesciunt sint
              temporibus laudantium consectetur, quam vero ut enim ipsa deleniti
              cupiditate quasi. Tempora sequi accusantium consequatur odit!
              Distinctio minima eaque ipsum, animi accusantium aut?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

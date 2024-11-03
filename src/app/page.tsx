import Calculator from '@/components/Calculator'
import About from '@/components/About'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <section className="bg-white/10 border border-solid border-white/20 p-5 rounded-lg"></section>
      <Calculator />
    </main>
  )
}

export default Home

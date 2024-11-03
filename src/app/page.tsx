import Calculator from '@/components/layouts/sections/Calculator'
import Members from '@/components/layouts/sections/Members'
import About from '@/components/layouts/sections/About'
import Hero from '@/components/layouts/sections/Hero'

const Home = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <Calculator />
      <Members />
    </main>
  )
}

export default Home

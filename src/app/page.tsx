import Calculator from '@/components/layouts/sections/Calculator'
import Members from '@/components/layouts/sections/Members'
import About from '@/components/layouts/sections/About'
import Hero from '@/components/layouts/sections/Hero'
import Explanation from '@/components/layouts/sections/Explanation'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Explanation />
      <Calculator />
      <Members />
    </main>
  )
}

export default Home

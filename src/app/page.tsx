import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/layouts/sections/Hero'))
const About = dynamic(() => import('@/components/layouts/sections/About'))
const Teams = dynamic(() => import('@/components/layouts/sections/Teams'))
const Calculator = dynamic(
  () => import('@/components/layouts/sections/Calculator')
)
const Explanation = dynamic(
  () => import('@/components/layouts/sections/Explanation')
)
const Technologies = dynamic(
  () => import('@/components/layouts/sections/Technologies')
)
const Questions = dynamic(
  () => import('@/components/layouts/sections/Questions')
)
const OtherProjects = dynamic(
  () => import('@/components/layouts/sections/OtherProjects')
)

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Explanation />
      <Calculator />
      <Questions />
      <Technologies />
      <Teams />
      <OtherProjects />
    </main>
  )
}

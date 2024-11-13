import React from 'react'
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiNodejsFill,
} from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'

interface TechProps {
  name: string
  icon: React.ReactNode
  link: string
}

export const technologies: TechProps[] = [
  {
    name: 'React Js',
    icon: <RiReactjsFill size={100} />,
    link: 'https://react.dev/',
  },
  {
    name: 'Next Js',
    icon: <RiNextjsFill size={100} />,
    link: 'https://nextjs.org/',
  },
  {
    name: 'TypeScript',
    icon: <BiLogoTypescript size={100} />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill size={100} />,
    link: 'https://tailwindcss.com',
  },
  {
    name: 'Node.js',
    icon: <RiNodejsFill size={100} />,
    link: 'https://nodejs.org/en',
  },
]

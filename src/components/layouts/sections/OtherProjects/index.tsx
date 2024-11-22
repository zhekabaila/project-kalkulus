'use client'
import ProjectCard from '@/components/common/Cards/Project'
import { projects } from '@/constant/projects'
import { useTheme } from '@/contexts/themeContext'
import React from 'react'

const OtherProjects = () => {
  const { darkMode } = useTheme()

  return (
    <section
      id="soal"
      className="bg-center bg-cover bg-no-repeat px-4 py-20 lg:p-36 border-y-4 border-y-blue-500 dark:border-y-jeruk"
      style={{
        backgroundImage: `url('/images/bbblurry-1${
          darkMode ? '-dark' : ''
        }.svg')`,
      }}
    >
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold dark:text-sun">
          Website Pembelajaran Lainnya
        </h2>
        <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {projects.map((item, index) => (
          <React.Fragment key={index}>
            <ProjectCard
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.image}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default OtherProjects

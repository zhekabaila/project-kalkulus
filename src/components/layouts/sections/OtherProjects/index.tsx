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
      className="bg-center bg-cover bg-no-repeat px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
      style={{
        backgroundImage: `url('/images/ttten${darkMode ? '-dark' : ''}.svg')`,
      }}
    >
      <div className="flex">
        <div className="bg-gray-200/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-gray-300/30 dark:border-gray-600/30 px-6 py-3">
          <h2 className="text-lg lg:text-3xl font-semibold dark:text-sun">
            Website Pembelajaran Lainnya
          </h2>
          <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20">
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

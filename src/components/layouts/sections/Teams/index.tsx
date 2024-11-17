'use client'

import MemberCard from '@/components/common/Cards/Team'
import { teams } from '@/constant/teams'
import { useTheme } from '@/contexts/themeContext'
import React from 'react'

interface TeamCardProps {
  name: string
  npm: string
  description: string
  img: string
  instagram: string
}

const Teams = () => {
  const { darkMode } = useTheme()

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
      style={{
        backgroundImage: `url('/images/ttten${darkMode ? '-dark' : ''}.svg')`,
      }}
      id="anggota"
    >
      {teams.map((item: TeamCardProps, key) => (
        <React.Fragment key={key}>
          <MemberCard
            name={item.name}
            npm={item.npm}
            description={item.description}
            img={item.img}
            instagram={item.instagram}
            key={key}
          />
        </React.Fragment>
      ))}
    </section>
  )
}

export default Teams

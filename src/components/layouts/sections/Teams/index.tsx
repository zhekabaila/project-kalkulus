
import MemberCard from '@/components/common/Cards/Team'
import { teams } from '@/constant/teams'
import React from 'react'

interface TeamCardProps {
  name: string
  npm: string
  description: string
  img: string
  instagram: string
}

const Teams = () => {

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
      style={{
        backgroundImage: `url('/images/bbburst.svg')`,
      }}
      id="anggota"
    >
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold dark:text-sun">
          Anggota Kelompok
        </h2>
        <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
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
      </div>
    </section>
  )
}

export default Teams

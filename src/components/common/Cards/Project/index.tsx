import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image: string
}

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  return (
    <div className="lg:basis-1/4 bg-slate-300/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-slate-400/20 dark:border-gray-600/30">
      <div className="flex items-center space-x-3 rounded-t-xl">
        <Image
          src={image}
          width={1500}
          height={1500}
          loading="lazy"
          alt={title + ' image'}
          className="w-full h-auto aspect-video object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col p-3 lg:p-6">
        <h3 className="text-lg font-semibold dark:text-sun">{title}</h3>
        <p className="text-sm dark:text-gray-400 mt-3 line-clamp-4">
          {description}
        </p>
        <Link
          href={link}
          target="_blank"
          className="text-primary font-semibold dark:text-jeruk hover:text-primary-dark mt-3"
        >
          Kunjungi Website
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

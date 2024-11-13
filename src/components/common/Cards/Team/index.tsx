import { FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export interface TeamCardProps {
  name: string
  npm: string
  description: string
  img: string
  instagram: string
}

const TeamCard = ({
  name,
  npm,
  description,
  img,
  instagram,
}: TeamCardProps) => {
  return (
    <div
      className="flex flex-col bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16"
    >
      <div className="relative flex gap-x-5">
        <div className="rounded-full object-center object-cover basis-1/4">
          <Image
            src={img}
            width={100}
            height={100}
            alt="a"
            className="rounded-full size-full aspect-square object-cover object-center"
          />
        </div>
        <div className="text-left flex flex-col justify-center basis-3/4">
          <h1 className="text-lg lg:text-xl font-medium text-black">{name}</h1>
          <p className="text-base lg:text-lg font-normal text-black">{npm}</p>
        </div>
        <Link
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          className="absolute top-0 right-0 p-2 bg-black rounded-full aspect-square"
        >
          <FaInstagram color="#B9FF66" size={16} />
        </Link>
      </div>
      <div className="border-t border-t-black dark:border-t-sun pt-7 mt-7">
        <p className="text-base lg:text-lg font-normal text-black">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamCard

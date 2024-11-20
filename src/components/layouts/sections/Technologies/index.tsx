import { technologies } from '@/constant/technologies'
import Link from 'next/link'

const Technologies = () => {
  return (
    <section
      id="teknologi"
      className="px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
    >
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold dark:text-sun">
          Teknologi Yang Digunakan
        </h2>
        <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
      </div>
      <div className="flex items-center justify-center gap-20 flex-wrap">
        {technologies.map(({ name, icon, link }, key) => (
          <Link
            href={link}
            key={key}
            target="_blank"
            className="flex flex-col justify-center items-center gap-y-2 *:hover:text-primary dark:*:hover:text-jeruk *:transition-all *:duration-300 *:ease-in-out"
          >
            {icon}
            <h3>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Technologies

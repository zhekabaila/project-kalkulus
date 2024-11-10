const AboutCard = ({
  title,
  highlightTitle,
  description,
  col,
  row,
}: {
  title: string
  highlightTitle: string
  description: string
  col: number
  row: number
}) => {
  return (
    <div
      className={`col-span-2 lg:col-span-1 lg:col-start-${col} lg:row-start-${row} space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16`}
    >
      <h3 className="text-lg lg:text-3xl font-semibold dark:text-sun">
        {title}{' '}
        <span className="text-blue-500 dark:text-jeruk">{highlightTitle}</span>
      </h3>
      <p className="text-xs lg:text-lg font-medium text-justify dark:text-sun">
        {description}
      </p>
    </div>
  )
}

export default AboutCard

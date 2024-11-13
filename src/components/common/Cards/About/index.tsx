const AboutCard = ({
  title,
  highlightTitle,
  description,
  row,
}: {
  title: string
  highlightTitle: string
  description: string
  row: number
}) => {
  let rowStart: string

  if (row === 1) {
    rowStart = 'row-start-1'
  } else if (row === 2) {
    rowStart = 'row-start-2'
  } else {
    rowStart = 'row-start-3'
  }
  return (
    <div
      className={`relative col-span-2 lg:col-span-1 odd:lg:col-start-1 even:lg:col-start-2 ${rowStart} space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16`}
    >
      {row % 2 != 0 ? (
        <div className="hidden lg:block absolute -left-[52px] top-[95px] size-6 bg-primary dark:bg-jeruk rounded-full"></div>
      ) : (
        <>
          <div className="hidden lg:block absolute -right-[56px] top-[95px] size-6 bg-primary dark:bg-jeruk rounded-full"></div>
        </>
      )}
      <h3 className="text-lg lg:text-3xl font-semibold dark:text-sun">
        {title}{' '}
        <span className="text-blue-500 dark:text-jeruk">{highlightTitle}</span>
      </h3>
      <p className="text-sm lg:text-lg font-medium dark:text-sun">
        {description}
      </p>
    </div>
  )
}

export default AboutCard

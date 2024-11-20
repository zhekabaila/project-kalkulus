import React from 'react'

const ExplanationCard = ({
  title,
  highlightTitle,
  children,
  span = false,
}: {
  title: string
  highlightTitle: string
  children: React.ReactNode
  span?: boolean
}) => {
  return (
    <div
      className={`col-span-2 ${
        span ? 'lg:col-span-2' : 'lg:col-span-1'
      } space-y-3 lg:space-y-7 bg-slate-300/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-slate-400/20 dark:border-gray-600/30 p-6 lg:p-16`}
    >
      <h3 className="text-lg lg:text-3xl font-semibold dark:text-sun">
        {title}{' '}
        <span className="text-blue-500 dark:text-jeruk">{highlightTitle}</span>
      </h3>
      {children}
    </div>
  )
}

export default ExplanationCard

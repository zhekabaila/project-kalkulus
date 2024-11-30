const Pecahan = ({
  atas,
  bawah,
  sebelum = '',
  sesudah = '',
  textColor = 'text-gray-500 dark:text-gray-400',
}: {
  atas: string
  bawah: string
  sebelum?: string
  sesudah?: string
  textColor?: string
}) => {
  return (
    <span className={`flex items-center justify-center gap-x-1 ${textColor}`}>
      {sebelum}
      <span className="flex flex-col items-center justify-center text-center">
        <span className={`${textColor}`}>{atas}</span>
        <span
          className={`border-t border-t-gray-500 dark:border-t-gray-400 w-full ${textColor}`}
        >
          {bawah}
        </span>
      </span>
      {sesudah}
    </span>
  )
}

export default Pecahan

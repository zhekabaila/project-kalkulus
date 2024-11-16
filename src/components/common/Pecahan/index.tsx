const Pecahan = ({
  atas,
  bawah,
  sebelum = '',
  sesudah = '',
}: {
  atas: string
  bawah: string
  sebelum?: string
  sesudah?: string
}) => {
  return (
    <span className="flex items-center justify-center gap-x-1 text-gray-500 dark:text-gray-400">
      {sebelum}
      <span className="inline-flex flex-col items-center">
        <span className="text-gray-500 dark:text-gray-400">{atas}</span>
        <span className="border-t border-t-gray-500 dark:border-t-gray-400 w-full text-gray-500 dark:text-gray-400">
          {bawah}
        </span>
      </span>
      {sesudah}
    </span>
  )
}

export default Pecahan

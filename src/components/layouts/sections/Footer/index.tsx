const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <footer className="px-4 py-7 lg:px-36 lg:py-7">
      <div className="flex items-center justify-center text-center w-full lg:w-auto bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-solid border-black/20 p-5 rounded-full">
        <p className="text-sm lg:text-lg font-medium">
          &copy; Copyright Kelompok 8 Kalkulus {year}
        </p>
      </div>
    </footer>
  )
}

export default Footer

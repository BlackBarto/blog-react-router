export default function MessageContainer({children, className: color}) {
  return (
    <div className={`fixed z-50 top-12 right-0 left-0 mx-auto w-[90%] max-w-[1000px] flex items-center justify-center ${color} border-l-8 bg-white shadow-md shadow-black rounded-md p-4`}>
      <article className="relative h-full w-full flex items-center gap-x-4">
        {children}
      </article>
    </div>
  )
}
export default function MessageContainer({children, className: color, hide}) {
  return (
    <div className={`relative w-full z-50 flex items-center justify-center ${color} ${hide ? "opacity-0 -translate-y-[20px] duration-500 pointer-events-none" : "opacity-1 -translate-y-[0px] duration-500"} border-l-8 bg-white transition shadow-md shadow-black rounded-md p-4`}>
      <article className="relative h-full w-full flex items-center gap-x-4">
        {children}
      </article>
    </div>
  )
}
export default function Card({children, visibility, img, direction, ...props}) {
  return (
    <section {...props} className={`flex ${direction === "ltr" ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"} ${visibility ? "opacity-100" : "-translate-x-4 opacity-0"} w-[90%] max-w-[500px] md:max-w-[1000px] rounded-md shadow-md shadow-gray-400 bg-[rgba(100,100,100,0.7)] min-h-[30rem] transition duration-700`}>
      <article className="w-full min-h-[250px] md:h-full md:w-1/2 flex flex-col gap-y-3 text-white items-start p-4">
        {children}
      </article>
      <img src={img} className="w-auto h-[300px] rounded-md grow-2 md:h-auto md:w-1/2 object-cover" alt="What are us?"/>
    </section>
  )
}

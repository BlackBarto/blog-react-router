export default function Section({children, img, direction}) {
  return (
    <section className={`flex ${direction === "ltr" ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"} w-[90%] max-w-[500px] md:max-w-[900px] rounded-md bg-[rgba(100,100,100,0.7)] min-h-[30rem] md:min-h-[26rem]`}>
      <article className="w-full min-h-[250px] md:h-full md:w-1/2 flex flex-col gap-y-3 text-white items-start p-4">
        {children}
      </article>
      <img src={img} className="w-auto h-[300px] grow-2 md:h-auto md:w-1/2 object-cover" alt="What are us?"/>
    </section>
  )
}
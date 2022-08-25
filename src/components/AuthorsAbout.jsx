import { useOutletContext } from "react-router-dom"

export default function AuthorsAbout() {
  const { userData: { id, ...validData } } = useOutletContext()

  return (
    <section>
      <h3>Some data</h3>
      {Object.entries(validData).map( ([key, value]) => {
        console.log(key, value)
        if (typeof value === "object") {
          return (
            <h3 key={key}>Some many data</h3>
          )
        }

        return (
          <article className="flex gap-4 items-center" key={key}>
            <h3 className="text-white text-lg">{key}</h3>
            <p>{value}</p>
          </article>
        )
      })}
    </section>
  )
}
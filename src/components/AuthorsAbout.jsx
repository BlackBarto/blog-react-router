import { useOutletContext } from "react-router-dom"

const AuthorsAboutFieldData = ({title, value}) => {
  return (
    <article className="flex gap-4 items-center">
      <h3 className="text-white text-lg">{title}</h3>
      <p>{value}</p>
    </article>
  )
}

export default function AuthorsAbout() {
  const { userData: { id, ...validData } } = useOutletContext()
  const queue = Object.entries(validData).sort( (a, b) => {
    if (typeof b[1] === "object") return -1
    return 1
  })
  console.log(validData)
  const childs = []
  let i = 0

  while (queue.length) {
    const [key, value] = queue.shift()
    i++

    if (i === 100) {
      console.log("infinite loop")
      break
    }

    if (typeof value === "object") {
      childs.push(<h3 key={key + "-title-of-data-section"}>{key}</h3>)
      queue.unshift(...Object.entries(value))
      continue
    }

    childs.push(<AuthorsAboutFieldData key={key + value + "-field-of-data"} title={key} value={value} />)

  }

  return (
    <section>
      <h3>Some data</h3>
      {childs}
    </section>
  )
}
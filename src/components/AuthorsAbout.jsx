import { useOutletContext } from "react-router-dom"
import AuthorsAboutFieldData from "../atoms/AuthorsAboutFieldData"
import AuthorsAboutHeadersOfData from "../atoms/AuthorsAboutHeadersOfData"

export default function AuthorsAbout() {
  const { userData: { id, ...validData } } = useOutletContext()
  const queue = Object.entries(validData).sort( (a, b) => {
    if (typeof b[1] === "object") return -1
    return 1
  })

  const childs = [<AuthorsAboutHeadersOfData key="Initial title" title="General Information" />]

  while (queue.length) {
    const [key, value] = queue.shift()

    if (typeof value === "object") {
      childs.push(<AuthorsAboutHeadersOfData key={key + "-field-header-of-at-" + Date.now()} title={key} />)

      queue.unshift(...Object.entries(value))
      continue
    }

    childs.push(<AuthorsAboutFieldData key={key + value + "-field-of-data"} title={key} value={value} />)
  }

  return (
    <table className="w-[80%] min-w-max-content max-w-[900px] mx-auto">
      <tbody>
        {childs}
      </tbody>
    </table>
  )
}
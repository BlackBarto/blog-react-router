import { Link } from "react-router-dom"

export default function Options({options}) {
  return (
    <ul className="flex flex-wrap gap-y-4 py-4">
      {options.map( ({text, link}) => (
        <li key={text + link} className="grow text-center">
          <Link className="inline-block transition-colors duration-300 hover:bg-blue-300 rounded-lg hover:text-black text-white py-2 px-4" to={link}>{text}</Link>
        </li>
      ))}
    </ul>
  )
}
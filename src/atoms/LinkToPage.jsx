import { Link } from "react-router-dom";

export default function LinkToPage({to, text}) {
  return (
    <button className="py-2 px-4 bg-blue-700 text-white transition-colors duration-300 hover:text-black hover:bg-sky-300 rounded-lg">
      <Link to={to}>{text}</Link>
    </button>
  )
}
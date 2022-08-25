import { Link } from "react-router-dom"
import { authorsArr } from "../services/postsData";

export default function AuthorsLink({authorId, className: moreClass = ""}) {
  return (
    <Link title="View all posts of this user" className={`${moreClass} relative z-30 transition-colors duration-200 italic hover:bg-blue-700 hover:text-white inline-block text-black bg-blue-300 rounded-lg`} to={`/authors/${authorId}`}><address className="py-2 px-4 italic">Post By {authorsArr[authorId]}</address></Link>
  )
}

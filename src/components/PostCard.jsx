import { useNavigate } from "react-router-dom"
import AuthorsLink from "../atoms/AuthorsLink"
import PostImage from "./PostImage"

export default function PostCard({post: {userId: authorId, title, id}, last, link, show}) {
  const navigate = useNavigate()
  const parsedTitle = title.length > 55 ? title.split("").slice(0, 55).concat("...").join("") : title
  const handleClick = ({target: {dataset}}) => {
    if (dataset.link !== "authors") {
      navigate(`/posts/${id}`, {replace: false})
    }
  }

  return (
    <article name="postLink" id={last ? "lastPost" : undefined} onClick={handleClick} title="View this post" className={` ${!show ? "-translate-x-6 opacity-0" : "" } relative flex border-4 border-transparent transition duration-300 hover:border-blue-300 flex-col p-4 items-center justify-end rounded-lg bg-[rgb(30,30,30)] w-full h-full max-w-[30rem] sm:max-w-none min-h-[26rem] cursor-pointer`}>
      <h3 className="relative z-30 opacity-80 uppercase text-center text-lg font-bold text-white my-auto">{parsedTitle}</h3>
      <PostImage id={id} title={parsedTitle} className="absolute rounded-md inset-0 h-full w-full opacity-50 object-cover" />
      {link && <AuthorsLink authorId={authorId} />}
    </article>
  )
}

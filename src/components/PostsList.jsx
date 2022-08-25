import { useState, useEffect } from "react"
import useObserver from "../hooks/useObserver"
import PostCard from "../components/PostCard"

export default function PostsList({ posts }) {
  const [postsToShow, setPostsToShow] = useState(6)

  const handleVisibility = ({ target, observer }) => {
    observer.unobserve(target)

    setPostsToShow( prev => prev + 6 > posts.length ? posts.length : prev + 6)
  }

  const { setElements } = useObserver({ rootMargin: "-30px", match: "/posts", onlyOnShow: true, handleVisibility })

  useEffect(() => {
    const lastPost = document.getElementById("lastPost")
    
    setElements([lastPost])
  }, [postsToShow])

  const postsElements = posts.slice(0, postsToShow).map( ( post, index) => {
    return  <PostCard key={post.id} link={true} post={post} last={index === postsToShow - 1} />
  })

  return (
    <section className="flex flex-col items-center sm:grid grid-cols-postsCards sm:grid-cols-big-postsCards max-w-[1300px] mx-auto auto-rows-postsCards sm:gap-x-20 gap-x-12 gap-y-16 px-6 sm:px-12">
      {postsElements}
    </section>
  )
}

import fetchResources from "../services/fetchResources"
import usePosts from "../hooks/usePosts"
import PostCard from "./PostCard"
import Loading from "./Loading"
import NotFound from "./NotFound"
import { useOutletContext } from "react-router-dom"

export default function AuthorsListPosts() {
  const {authorId, userData} = useOutletContext()
  const postsUrl = `https://jsonplaceholder.typicode.com/users/${authorId}/posts`
  const {posts, isLoading} = usePosts(() => fetchResources(postsUrl))

  if (isLoading) return <Loading />
  if (!posts.length) return <NotFound />
  console.log(posts)
  return (
    <>
    <h2 className="mx-auto text-xl text-white">{userData.username} has {posts.length} posts published</h2>
    <section className="flex flex-col sm:grid gap-x-16 gap-y-20 sm:grid-cols-big-postsCards mx-auto">
      {posts.map(post => <PostCard show={true} key={post.id} post={post} />)}
    </section>
    </>
  )
}
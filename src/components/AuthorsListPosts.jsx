import fetchResources from "../services/fetchResources"
import usePosts from "../hooks/usePosts"
import PostCard from "./PostCard"
import Loading from "../atoms/Loading";
import NotFound from "../atoms/NotFound"
import { useOutletContext } from "react-router-dom"

export default function AuthorsListPosts() {
  const {authorId, userData} = useOutletContext()
  const postsUrl = `https://jsonplaceholder.typicode.com/users/${authorId}/posts`
  const {posts, isLoading} = usePosts(() => fetchResources(postsUrl))

  if (isLoading) return <Loading />
  if (!posts.length) return <NotFound />

  return (
    <>
    <h2 className="mx-auto text-xl text-white">{userData.name} has {posts.length} posts published</h2>
    <section className="flex flex-col mx-auto sm:mx-0 sm:grid gap-x-12 gap-y-20 sm:grid-cols-big-postsCards px-4 pb-16">
      {posts.map(post => <PostCard show={true} key={post.id} post={post} />)}
    </section>
    </>
  )
}

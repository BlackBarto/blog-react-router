import fetchResources from "../services/fetchResources";
import usePosts from "../hooks/usePosts"
import Loading from "../components/Loading"
import NotFound from "../components/NotFound"
import PostsList from "../components/PostsList"
import { useEffect } from "react";

export default function PostsAll() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const {posts, isLoading} = usePosts(() => fetchResources(url))

  useEffect(() => {
    window.scrollTo(0, -(window.screenY) )
  }, [])

  return (
    <main className="pt-28 min-h-body space-y-6">
      <h2 className="text-center text-4xl font-bold text-white">Posts</h2>
      {isLoading
      ? <div className="pt-12"><Loading /></div> 
      : !posts.length 
      ? <div className="pt-12"><NotFound /></div>
      : <PostsList posts={posts}/>
      }
    </main>
  )
}

import fetchResources from "../services/fetchResources";
import usePosts from "../hooks/usePosts"
import Loading from "../atoms/Loading";
import NotFound from "../atoms/NotFound"
import ScrollToTop from "../atoms/ScrollToTop";
import PostsList from "../components/PostsList"

export default function PostsAll() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const {posts, isLoading} = usePosts(() => fetchResources(url))
  document.title = "Posts"

  return (
    <>
    <ScrollToTop/>
    <main className="pt-28 min-h-body space-y-6">
      <h2 className="text-center text-4xl font-bold mb-6 text-white">Posts</h2>
      {isLoading
      ? <div className="pt-12"><Loading /></div> 
      : !posts.length 
      ? <div className="pt-12"><NotFound /></div>
      : <PostsList posts={posts}/>
      }
    </main>
    </>
  )
}

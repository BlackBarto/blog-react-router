import { BsArrowBarLeft } from "react-icons/bs";
import { useParams, Link, useNavigate } from "react-router-dom";
import fetchResources from "../services/fetchResources"
import usePosts from "../hooks/usePosts"
import ScrollToTop from "../atoms/ScrollToTop";
import AuthorsLink from "../atoms/AuthorsLink"
import Loading from "../atoms/Loading";
import PostListComments from "../components/PostListComments"
import PostImage from "../components/PostImage"

export default function PostDetail() {
  const navigate = useNavigate()
  const { postId } = useParams()
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
  const { posts: post, isLoading } = usePosts(() => fetchResources(url))

  if (!post) {
    navigate("/posts", { replace: true })
  }

  if (!isLoading) {
    document.title = "Post " + (post.title.length > 10 ? post.title.substring(0, 11) + "..." : post.title)
  } else {
    document.title = "Posts"
  }

  return (
    <>
    <ScrollToTop />
    <div className="min-h-body mx-auto flex flex-col gap-y-8 w-[95%] h-[95%] items-center pt-32 md:pt-24">
      <aside className="rounded-3xl flex flex-wrap gap-y-4 content-center items-center py-3 px-5 max-w-[1100px] w-full bg-white">
        <div className="grow sm:grow-0 sm:mr-auto flex">
        	<Link to="/posts" className="flex w-auto mx-auto items-center space-x-2 px-4 py-2 rounded-xl transition-colors duration-300 hover:text-white  hover:bg-blue-700"><BsArrowBarLeft className="text-xl font-bold" /> View all posts</Link>
        </div>
        {!isLoading && <div className="grow flex sm:grow-0 sm:ml-auto"><AuthorsLink className="mx-auto" authorId={post.userId} /> </div>}
      </aside>
      <main className="flex flex-col bg-slate-600 rounded-lg gap-y-8 items-center max-w-[900px] w-full py-6">
        {isLoading ? <div className="py-8"><Loading /></div> : (
          <div className="flex flex-col gap-y-4 items-center w-[93%] sm:w-4/5">
            <h1 className="font-bold text-xl sm:text-3xl text-white">{post.title}</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis non earum. Totam soluta animi nisi, consequuntur perspiciatis ex impedit voluptate? Quos ipsa labore officia rerum iste et magni! Facilis.</p>
            <PostImage className="w-full h-auto object-contain" id={post.id} title={post.title} />
            <p className="text-white text-md sm:text-lg">{post.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eveniet exercitationem atque consequatur reprehenderit facere laboriosam reiciendis non fugiat quae corrupti deserunt voluptatibus, enim, nesciunt commodi assumenda, quam inventore excepturi.</p>
          </div>
        )}
      </main>
      <PostListComments postId={postId} />
    </div>
    </>
  )
}

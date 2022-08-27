import fetchResources from "../services/fetchResources"
import usePosts from "../hooks/usePosts"
import Loading from "./Loading"
import Comment from "./Comment"

const CommentsContainer = ({children}) => {
  return (
    <div className="flex flex-col bg-slate-600 gap-y-6 py-4 px-4 pb-8 rounded-lg items-center max-w-[900px] w-full">
      <h3 className="uppercase text-xl sm:text-2xl text-white">Comments</h3>
      {children}
    </div>
  )
}

export default function PostComments({postId}) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  const {posts: comments, isLoading} = usePosts(() => fetchResources(url))

  if (isLoading) return <CommentsContainer><Loading /></CommentsContainer>
  if (!comments.length) return <CommentsContainer><h3 className="text-white">No comments yet</h3></CommentsContainer>

  const commentsElements = comments.map( comment => <Comment key={comment.id} comment={comment} />)

  return (
    <CommentsContainer>
      {commentsElements}
    </CommentsContainer>
  )
}

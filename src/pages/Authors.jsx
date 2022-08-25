import { useParams, Outlet, Link } from "react-router-dom";
import fetchResources from "../services/fetchResources"
import usePosts from "../hooks/usePosts"
import Loading from "../components/Loading"

const AuthorsContainer = ({children}) => {
  return (
    <div className="pt-32 mx-auto w-[95%] max-w-[1000px] min-h-body">
      <main className="flex flex-col items-center rounded-md w-full h-full bg-slate-600 py-6 px-4">
        {children}
      </main>
    </div>
  )
}

export default function Authors() {
  const {authorId} = useParams()
  const userUrl = `https://jsonplaceholder.typicode.com/users/${authorId}`

  const {posts: userData, isLoading} = usePosts(() => fetchResources(userUrl))

  if (isLoading) return <AuthorsContainer><Loading/></AuthorsContainer>

  return (
    <AuthorsContainer>
      <header className="flex flex-col items-center gap-4 w-full justify-start">
        <img className="rounded-full h-32 w-32" src={`https://randomuser.me/api/portraits/${authorId % 3 === 0 ? "men" : "women"}/${authorId >= 100 ? authorId % 100 : authorId}.jpg`} alt={`Image of ${userData.name}`} title={userData.name}
        />
        <p className="grow flex justify-start items-center flex-wrap gap-8">
          <span className="flex items-start flex-col">
            <span className="text-white text-lg underline">Name</span>
            <span className="text-gray-200">{userData.name}</span>
          </span>
          <span className="flex items-start flex-col">
            <span className="text-white text-lg underline">Username</span>
            <span className="text-gray-200">{userData.username}</span>
          </span>
          <span className="flex items-start flex-col">
            <span className="text-white text-lg underline">Email</span>
            <span className="text-gray-200">{userData.email}</span>
          </span>
        </p>
      </header>
      <main className="flex flex-col gap-y-12 mt-6 w-full">
        <section className="bg-gray-900 w-full max-w-[20rem] mx-auto rounded-md">
          <ul className="flex flex-wrap gap-y-4 py-4">
            <li className="grow text-center">
              <Link className="inline-block transition-colors duration-300 hover:bg-blue-300 rounded-lg hover:text-black text-white py-2 px-4" to="posts">Posts</Link>
            </li>
            <li className="grow text-center">
              <Link className="inline-block transition-colors duration-300 hover:bg-blue-300 rounded-lg hover:text-black text-white py-2 px-4" to="about">About</Link>
            </li>
          </ul>
        </section>
        <Outlet context={{authorId, userData}}/>
      </main>
    </AuthorsContainer>
  )

}

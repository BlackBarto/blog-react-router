import { useParams, Outlet } from "react-router-dom";
import fetchResources from "../services/fetchResources"
import usePosts from "../hooks/usePosts"
import Loading from "../atoms/Loading";
import NotFound from "../atoms/NotFound";
import ColOfData from "../atoms/ColOfData"
import Options from "../atoms/Options"

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

  if (!isLoading && userData.length === 0) {
    return <AuthorsContainer><NotFound name="Author" /></AuthorsContainer>
  }

  document.title = `About of ${userData.name}`

  return (
    <AuthorsContainer>
      <header className="flex flex-col items-center gap-4 w-full justify-start">
        <img className="rounded-full h-32 w-32" src={`https://randomuser.me/api/portraits/${authorId % 3 === 0 ? "men" : "women"}/${authorId >= 100 ? authorId % 100 : authorId}.jpg`} alt={`Image of ${userData.name}`} title={userData.name} />
        <p className="grow flex justify-start items-center flex-wrap gap-8">
          <ColOfData data={userData.name} title="Name" />
          <ColOfData data={userData.username} title="Username" />
          <ColOfData data={userData.email} title="Email" />
        </p>
      </header>
      <div className="flex flex-col gap-y-12 mt-6 w-full">
        <section className="bg-gray-900 w-full max-w-[20rem] mx-auto rounded-md">
          <Options options={[{text: "Posts", link: "posts"}, {text: "About", link: "about"}]}/>
        </section>
        <Outlet context={{authorId, userData}}/>
      </div>
    </AuthorsContainer>
  )

}

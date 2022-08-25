import { Routes, Route, useMatch } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import PostsAll from "./pages/PostsAll"
import PostDatail from "./pages/PostDatail"
import Authors from "./pages/Authors"
import AuthorsListPosts from "./components/AuthorsListPosts"
import AuthorsAbout from "./components/AuthorsAbout"
import Contact from "./pages/Contact"
import useOberver from "./hooks/useObserver"
import { useState, useRef } from "react";

function App() {
  const match = useMatch({
    path: "/",
    end: true
  })
  const refElement = useRef(null)
  const [isVisible, setIsVisible] = useState(!match)
  const handleVisibility = ({isIntersecting}) => {
    setIsVisible(!isIntersecting)
  }

  useOberver({match: match?.pathname, rootMargin: "-80% 0px 0px 0px", handleVisibility, refElement, one: true})

  return (
    <div className="bg-[rgb(8,8,8)] min-h-[100vh]">
      <Header isVisible={isVisible || !match} />
      <Routes>
        <Route path="/" element={<Home refElement={refElement} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/posts">
          <Route index element={<PostsAll />}/>
          <Route path=":postId" element={<PostDatail />}/>
        </Route>
        <Route path="/authors/:authorId" element={<Authors />}>
          <Route path="posts" element={<AuthorsListPosts />}/>
          <Route path="about" element={<AuthorsAbout />}/>
        </Route>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <footer className="mt-16 bg-blue-300 gap-4 p-5 flex flex-wrap justify-center items-center">
        <address className="grow text-center text-gray-800">Page made by Arnoldo Gonzalez</address>
        <ul className="grow flex flex-wrap justify-center gap-x-6">
          <li><a className="min-w-max-content text-sm sm:text-base block text-black py-2 rounded px-3 border-blue-700 border-2 transition-colors duration-300 hover:bg-blue-700 hover:text-white" href="">My Github</a></li>
          <li><a className="min-w-max-content text-sm sm:text-base block text-black py-2 rounded px-3 border-blue-700 border-2 transition-colors duration-300 hover:bg-blue-700 hover:text-white" href="">Source code</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default App

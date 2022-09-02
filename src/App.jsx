import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import PostsAll from "./pages/PostsAll"
import PostDatail from "./pages/PostDatail"
import Authors from "./pages/Authors"
import MessagesSection from "./components/MessagesSection";
import AuthorsListPosts from "./components/AuthorsListPosts"
import AuthorsAbout from "./components/AuthorsAbout"
import Contact from "./pages/Contact"
import { reducer, ACTIONS, INITIAL_STATE} from "./reducers/messagesReducer"
import { useReducer, useRef } from "react";

function App() {
  const refElement = useRef(null)
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  
  const enableObserver = (setElements) => {
    setElements([refElement?.current])
  }

  return (
    <>
      <MessagesSection state={state} ACTIONS={ACTIONS} dispatch={dispatch} />
      <Header enableObserver={enableObserver} />
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
        <Route path="/contact" element={<Contact dispatch={dispatch} />}/>
      </Routes>
      <footer className="relative z-10 mt-16 bg-blue-300 gap-4 p-5 flex flex-wrap justify-center items-center">
        <address className="grow text-center text-gray-800">Page made by Arnoldo Gonzalez</address>
        <ul className="grow flex flex-wrap justify-center gap-x-6">
          <li><a className="min-w-max-content text-sm sm:text-base block text-black py-2 rounded px-3 border-blue-700 border-2 transition-colors duration-300 hover:bg-blue-700 hover:text-white" href="">My Github</a></li>
          <li><a className="min-w-max-content text-sm sm:text-base block text-black py-2 rounded px-3 border-blue-700 border-2 transition-colors duration-300 hover:bg-blue-700 hover:text-white" href="">Source code</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App

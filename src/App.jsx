import { Routes, Route } from "react-router-dom";
import NavLink from "./components/NavLink";
import Home from "./pages/Home"

const About = () => {
  return <h1>ABOUTTT</h1>
}

const Products = () => {
  return <h1>Products</h1>
}

const Contact = () => {
  return <h1>Contact</h1>
}

function App() {
  return (
    <div className="bg-[rgb(8,8,8)] min-h-[100vh] pb-6">
      <header className="sticky top-0 z-50 min-h-[4.5rem] bg-blue-300 flex gap-x-4 flex-wrap items-center">
        <h1 className="grow uppercase text-2xl text-center text-black">Blog of Informatic</h1>
        <nav className="grow">
          <ul className="flex gap-x-4 items-center justify-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App

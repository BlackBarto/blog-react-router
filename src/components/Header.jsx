import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Header({isVisible}) {
  const [isNavActive, setIsNavActive] = useState(false)

  const handleNavActive = () => {
    setIsNavActive(prev => !prev)
  }

  return (
    <header className={`${ isVisible ? "bg-blue-300" : "bg-transparent"} fixed w-full top-0 z-50 min-h-[4.5rem] transition-colors duration-300 p-3 bg-blue-300 flex justify-between px-6 gap-x-4 gap-y-2 sm:flex-wrap items-center`}>
        <h1 className={`${ isVisible ? "text-black" : "text-white"} sm:grow text-xl sm:text-2xl text-center`}>Blog of Informatic</h1>
        <nav className={`sm:grow flex justify-center transition duration-300`}>
          <button onClick={handleNavActive} className={`flex text-center sm:hidden ${ isVisible ? "text-black" : "text-white"} font-bold text-2xl`}>
            <FaBars className={`${isNavActive ? "hidden" : "block"}`} />
            <CgClose className={`${!isNavActive ? "hidden" : "block"}`} />
          </button>
          <ul className={`${ isVisible ? "bg-blue-500" : "bg-transparent"} ${isNavActive ? "translate-x-0" : "-translate-x-full"} transition duration-300 opacity-[0.95] sm:opacity-100 absolute top-[4.5rem] py-6 sm:py-0 right-0 left-0 h-[90vh] sm:h-auto w-full sm:top-0 sm:bg-transparent sm:relative sm:w-auto sm:translate-x-0 flex flex-col text-xl gap-y-6 sm:text-base sm:flex-row gap-x-4 items-center`}>
            <NavLink isVisible={isVisible} to="/">Home</NavLink>
            <NavLink isVisible={isVisible} to="/about">About</NavLink>
            <NavLink isVisible={isVisible} to="/posts">Posts</NavLink>
            <NavLink isVisible={isVisible} to="/contact">Contact</NavLink>
          </ul>
        </nav>
      </header>
  )
}
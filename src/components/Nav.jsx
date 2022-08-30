import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Nav({isVisible}) {
  const [isNavActive, setIsNavActive] = useState(false)

  const handleNavActive = () => {
    setIsNavActive(prev => !prev)
  }

  return (
    <nav className={`${isNavActive ? "bg-blue-700 sm:bg-transparent text-white transtion-colors duration-200" : ""} sm:grow flex p-2 rounded-full justify-center transition duration-300`}>
      <button onClick={handleNavActive} className={`flex text-center sm:hidden ${ isVisible ? "text-black" : "text-white"} font-bold text-2xl`}>
        <FaBars className={`${isNavActive ? "hidden" : "block"}`} />
        <CgClose className={`${!isNavActive ? "hidden" : "block text-white"}`} />
      </button>
      <ul className={`${ isVisible ? "bg-blue-500" : "bg-transparent"} ${isNavActive ? "translate-x-0" : "-translate-x-full"} transition duration-300 opacity-[0.95] sm:opacity-100 absolute top-[4.5rem] py-6 sm:py-0 right-0 left-0 h-[90vh] sm:h-auto w-full sm:top-0 sm:bg-transparent sm:relative sm:w-auto sm:translate-x-0 flex flex-col text-xl gap-y-6 sm:text-base sm:flex-row gap-x-4 items-center`}>
        <NavLink isVisible={isVisible} to="/">Home</NavLink>
        <NavLink isVisible={isVisible} to="/about">About</NavLink>
        <NavLink isVisible={isVisible} to="/posts">Posts</NavLink>
        <NavLink isVisible={isVisible} to="/contact">Contact</NavLink>
      </ul>
    </nav>
  )
}
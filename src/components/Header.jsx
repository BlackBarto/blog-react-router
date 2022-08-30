import { useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import useObserver from "../hooks/useObserver";
import Nav from "./Nav"

export default function Header({enableObserver}) {
  const match = useMatch({ path: "/", end: true })
  const [isVisible, setIsVisible] = useState(!match)

  const handleVisibility = ({isIntersecting}) => {
    setIsVisible(!isIntersecting)
  }

  const {observer, setElements} = useObserver({match: match?.pathname, handleVisibility, onlyOnShow: false, rootMargin: "-90% 0px 0px 0px"})

  useEffect(() => {
    if (match) {
      enableObserver(setElements)
    } else {
      observer?.disconnect()
    }
  }, [match?.pathname])

  return (
    <header className={`${ isVisible ? "bg-blue-300" : "bg-transparent"} fixed w-full top-0 z-40 min-h-[4.5rem] transition-colors duration-300 p-3 bg-blue-300 flex justify-between px-6 gap-x-4 gap-y-2 sm:flex-wrap items-center`}>
        <h1 className={`${ isVisible ? "text-black" : "text-white"} sm:grow text-xl sm:text-2xl text-center`}>Blog of Informatic</h1>
        <Nav isVisible={isVisible}/>
      </header>
  )
}
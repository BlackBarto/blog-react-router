import MessageContainer from "../atoms/MessageContainer";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

export default function Message({title, body, handleClose, color, id = null, duration = 10000, delay = 0}) {
  const [hide, setHide] = useState(true)

  const animateHide = () => {
    setHide((prev) => {
      if (prev) return true

      setTimeout(() => {
        handleClose(id)
      }, 400)

      return true
    })
  }

  useEffect(() => {
    const removeTimeOut = setTimeout(animateHide, duration)
    const delayTimeOut = setTimeout(() => setHide(false), delay)
    return () => {
      clearTimeout(removeTimeOut)
      clearTimeout(delayTimeOut)
    }
  }, [])

  return (
    <MessageContainer className={`${color === "green" ? "border-green-700" : color === "red" ? "border-red-700" : "border-yellow-700"}`} hide={hide}>
      <div className="grow flex flex-wrap items-center gap-x-4">
        <h4 className={`font-bold ${color === "green" ? "text-green-700" : color === "red" ? "text-red-700" : "text-yellow-700"} sm:mx-0 uppercase text-lg sm:text-xl`}>{title}</h4>
        <p className="text-black w-[240px] grow text-base sm:text-lg">{body}</p>
      </div>
      <button onClick={animateHide} className={`${hide ? "pointer-events-none" : ""} bg-red-700 border-red-700 text-white border-2 rounded-full text-xl p-1 transition-colors duration-300 hover:bg-red-300 hover:text-red-700 focus:text-red-700 focus:bg-red-300`}><CgClose /></button>
    </MessageContainer>
  )
}
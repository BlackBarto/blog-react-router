import MessageContainer from "../atoms/MessageContainer";
import { CgClose } from "react-icons/cg";
import { useEffect } from "react";

export default function SucessModal({body, handleClose}) {
  useEffect(() => {
    const timeOut = setTimeout(handleClose, 5000)

    return () => clearTimeout(timeOut)
  }, [])

  return (
    <MessageContainer className="border-green-700">
      <div className="grow flex flex-wrap items-center gap-x-4">
        <h4 className="font-bold text-green-700 sm:mx-0 uppercase text-lg sm:text-xl">Sucess</h4>
        <p className="text-black w-[240px] grow text-base sm:text-lg">{body}</p>
      </div>
      <button onClick={handleClose} className="bg-red-700 border-red-700 text-white border-2 rounded-full text-xl p-1 transition-colors duration-300 hover:bg-red-300 hover:text-red-700 focus:text-red-700 focus:bg-red-300"><CgClose /></button>
    </MessageContainer>
  )
}
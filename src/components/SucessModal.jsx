import ModalContainer from "../atoms/ModalContainer";
import { CgClose } from "react-icons/cg";

export default function SucessModal({title, body, handleClose}) {
  return (
    <ModalContainer>
      <button onClick={handleClose} className="absolute top-4 right-4 bg-red-700 border-red-700 text-white border-4 rounded-full text-xl transition-colors duration-300 hover:bg-red-300 hover:border-red-300 hover:text-red-700 focus:border-red-300 focus:text-red-700 focus:bg-red-300"><CgClose /></button>
      <h2 className="font-bold text-green-700 uppercase text-3xl">Sucess {title}</h2>
      <p className="text-black text-xl">{body}</p>
      <button onClick={handleClose} className="flex gap-x-2 items-center bg-red-700 border-red-700 text-white border-4 rounded-xl transition-colors py-2 px-4 duration-300 hover:bg-transparent hover:text-red-700 focus:text-red-700 focus:bg-transparent">Close <CgClose /></button>
    </ModalContainer>
  )
}
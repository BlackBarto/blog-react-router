import { useState } from "react"

export default function TextArea({required, ...props}) {
  const [isInvalid, setIsInvalid] = useState(false)

  const handleBlur = ({target}) => {
    if (required && target.value === "") setIsInvalid(true)
    else setIsInvalid(false)
  }

  return (
    <textarea {...props} onBlur={handleBlur} cols="30" rows="10" className={`resize-none ${ !isInvalid ? "bg-gray-900" : "bg-red-700"} text-white hover:border-blue-300 w-full placeholder:italic focus:border-gray-900 focus:bg-blue-700 py-3 relative z-10 px-4 outline-none border-transparent placeholder:text-gray-300 border-4 rounded-md transition duration-300`}></textarea>
  )
}
import { useState } from "react"

export default function NormalInput({large = "base", required, ...props}) {
  const [isInvalid, setIsInvalid] = useState(false)

  const handleBlur = ({target}) => {
    if (required && target.value === "") setIsInvalid(true)
    else setIsInvalid(false)
  }

  return (
    <input onBlur={handleBlur} {...props} required={required} className={`py-2 ${large === "base" ? "w-2/3" : large === "sm" ? "w-1/2" : "w-full"} relative z-10 rounded-md px-4 placeholder:italic placeholder:text-gray-300 ${ !isInvalid ? "bg-gray-900" : "bg-red-700"} focus:bg-transparent transition duration-300 text-white border-2 border-transparent outline-none focus:border-gray-900 focus:bg-blue-700 hover:border-blue-700`} />
  )  
}
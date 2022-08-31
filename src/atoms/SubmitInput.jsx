export default function SubmitInput({isLoading, ...props}) {
  return (
    <input type="submit" {...props} className={`${isLoading ? "pointer-events-none	" : "cursor-pointer"} mx-auto my-4 text-white rounded-xl py-2 px-4 transition-colors bg-blue-700 outline-none duration-300 hover:text-black hover:bg-blue-300 focus:bg-blue-300 focus:text-black`} />
  )
}
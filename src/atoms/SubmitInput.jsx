export default function SubmitInput({isLoading, ...props}) {
  return (
    <input type="submit" {...props} className="mx-auto my-4 text-white rounded-xl py-2 px-4 transition-colors bg-blue-700 duration-300 hover:text-black hover:bg-blue-300" />
  )
}
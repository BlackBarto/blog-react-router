import Loading from "./Loading"

export default function LoadingSection() {
  return (
    <div className="h-full inset-0 w-full absolute z-30 bg-gray-900 opacity-70 flex flex-col items-center justify-center">
      <Loading />
    </div>
  )
}
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-32 w-full">
      <div className="absolute h-32 w-32 rounded-full border-4 border-gray-300 border-t-blue-700 animate-spin"></div>
      <p className="text-gray-300 font-bold text-xl">Loading...</p>
    </div>
  )
}
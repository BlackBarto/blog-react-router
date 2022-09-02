export default function ColOfData({title, data}) {
  return (
    <span className="flex items-center rounded-xl py-2 px-4 bg-gray-500 flex-col">
      <span className="text-white text-center text-lg underline">{title}</span>
      <span className="text-gray-200">{data}</span>
    </span>
  )
}
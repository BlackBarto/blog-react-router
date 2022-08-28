export default function ColOfData({title, data}) {
  return (
    <span className="flex items-start flex-col">
      <span className="text-white text-lg underline">{title}</span>
      <span className="text-gray-200">{data}</span>
    </span>
  )
}
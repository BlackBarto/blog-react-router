export default function AuthorsAboutFieldData({title, value}) {
  return (
    <tr className="border-2 border-gray-100 bg-gray-900">
     <th className="text-white p-4 font-bold text-lg border-r-2 border-gray-100">{title}</th>
     <td className="px-4 py-2 text-white">{value}</td>
    </tr>
  )
}
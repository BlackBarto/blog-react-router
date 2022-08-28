export default function Comment({ comment: { id, name, email, body } }) {
  return (
    <article className="flex flex-col gap-y-4 w-full rounded-md p-4 bg-gray-900">
      <div className="flex flex-wrap justify-center items-center content-center gap-x-2">
        <img className="rounded-full h-16 w-16 overflow-hidden object-contain" src={`https://randomuser.me/api/portraits/${id % 3 === 0 ? "men" : "women"}/${id >= 100 ? id % 100 : id}.jpg`} alt={`Profile image`} />
        <p className="grow min-w-[5rem] w-[min-content] flex flex-col">
          <span className="text-white text-base font-bold">{name}</span>
          <span className="text-gray-300 text-sm">{email}</span>
        </p>
      </div>
      <p className="text-white">{body}</p>
    </article>
  )
}

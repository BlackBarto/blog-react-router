export default function ModalContainer({children}) {
  return (
    <div className="fixed z-50 inset-0 h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <article className="relative h-[80%] w-[90%] sm:h-2/3 sm:w-2/3 bg-white rounded-md p-6 flex flex-col items-center gap-y-4">
        {children}
      </article>
    </div>
  )
}
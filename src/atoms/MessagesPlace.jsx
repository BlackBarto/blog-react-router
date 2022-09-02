export default function MessagesSection ({children}) {
  return (
    <section className="fixed flex flex-col gap-y-6 z-50 top-12 right-0 left-0 mx-auto w-[90%] max-w-[1000px]">
      {children}
    </section>
  )
}
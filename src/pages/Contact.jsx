import { useState } from "react"
import NormalInput from "../atoms/NormalInput"
import SubmitInput from "../atoms/SubmitInput"
import TextArea from "../atoms/TextArea"

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const {target} = e
    const data = Object.fromEntries(new FormData(target))
    target.reset()
    console.log(data)
  }

  return (
    <main className="pt-32 min-h-body space-y-6">
      <h2 className="text-center mx-auto text-4xl font-bold text-white">Contact me!</h2>
      <form className="w-[90%] rounded-xl mx-auto max-w-[600px] flex flex-col items-start pt-6 pb-8 pl-6 pr-4 gap-y-2 bg-slate-600" onSubmit={handleSubmit}>
        <label htmlFor="name" className="pl-2 text-white">Name</label>
        <NormalInput type="text" required={true} name="name" placeholder="Enter your name" />
        <label htmlFor="email" className="pl-2 pt-2 text-white">Email</label>
        <NormalInput name="email" type="email" required={true} large="lg" placeholder="Enter your email" />
        <label htmlFor="message" className="pl-2 pt-2 text-white">Message</label>
        <TextArea name="message" id="message" required={true} placeholder="Enter your message" />
        <SubmitInput value="Send the message" />
      </form>
    </main>
  )
}
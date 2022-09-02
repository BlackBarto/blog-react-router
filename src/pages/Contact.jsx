import heroImage from "../assets/software_developer.jpg";
import NormalInput from "../atoms/NormalInput";
import SubmitInput from "../atoms/SubmitInput";
import TextArea from "../atoms/TextArea";
import LoadingSection from "../components/LoadingSection";
import sendMessage from "../services/sendMessage";
import useForm from "../hooks/useForm";

export default function Contact({dispatch}) {
  const {handleSubmit, isLoading} = useForm(sendMessage, dispatch)

  document.title = "Contact"

  return (
    <>
    <img src={heroImage} alt="Contact us" className="fixed inset-0 h-full w-full object-cover opacity-50" />
    <main className="relative z-10 opacity-90 pt-32 min-h-body space-y-6">
      <h1 className="text-center mx-auto text-4xl font-bold text-white">Contact me!</h1>
      <form className="relative w-[90%] rounded-xl mx-auto max-w-[600px] flex flex-col items-start pt-6 pb-8 pl-6 pr-4 gap-y-2 bg-slate-600" onSubmit={handleSubmit}>
        {isLoading && <LoadingSection />}
        <label htmlFor="name" className="pl-2 text-white">Name</label>
        <NormalInput type="text" required={true} name="name" placeholder="Enter your name" />
        <label htmlFor="email" className="pl-2 pt-2 text-white">Email</label>
        <NormalInput name="email" type="email" required={true} large="lg" placeholder="Enter your email" />
        <label htmlFor="message" className="pl-2 pt-2 text-white">Message</label>
        <TextArea name="message" id="message" required={true} placeholder="Enter your message" />
        <SubmitInput isLoading={isLoading} value="Send the message" />
      </form>
    </main>
    </>
  )
}
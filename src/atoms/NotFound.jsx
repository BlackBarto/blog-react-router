import notFound from "../assets/not_found.svg";

export default function NotFound({name = "posts"}) {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap sm:items-center justify-center gap-5">
      <img className="h-28 w-28 mx-auto sm:mx-0 object-contain bg-white p-2 pb-3 rounded-3xl" src={notFound} alt="Not found image"/>
      <div className="w-4/5 sm:w-1/2 min-w-[14rem] mx-auto sm:mx-0 flex flex-col gap-y-2">
        <h3 className="font-bold underline decoration-2 text-white mx-auto text-center text-lg sm:text-xl">We have problems to find the {name}</h3>
        <p className="text-gray-200 text-md">This may be for the following reasons:</p>
        <ul className="text-gray-200 space-y-2">
          <li className="text-gray-200 text-md"><b className="text-sky-300">The internet:</b> Check your connection and try again</li>
          <li className="text-gray-200 text-md"><b className="text-yellow-300">The URL:</b> If you are in this page from a URL that someone send to you, its posible that this URL is wrong, navigate using the nav bar on top of the page for find the {name}</li>
        </ul>
      </div>
    </div>
  )
}

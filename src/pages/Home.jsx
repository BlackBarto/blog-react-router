import Card from "../components/Card";
import LinkToPage from "../atoms/LinkToPage";
import heroImage from "../assets/software_developer.jpg";
import homeImage from "../assets/coding-g642719bbc_1920.jpg";
import whatAreUs from "../assets/persona_usando_computadora_2.jpg";
import whatAreOurWay from "../assets/computadora_con_codigo.jpg";
import useObserver from "../hooks/useObserver";
import { useEffect, useState } from "react";

export default function Home({refElement}) {
  const [visiblesSections, setVisiblesSections] = useState({})

  const handleVisibility = ({target, observer}) => {
    const element = target.dataset.index
    setVisiblesSections(prev => {
      return {...prev, [element]: true}
    })

    observer.unobserve(target)
  }

  const {setElements} = useObserver({match: "/home", rootMargin: "-100px", handleVisibility, onlyOnShow: true})

  useEffect(() => {
    const elements = document.querySelectorAll("main section[data-index]")
    setElements(elements)
  }, [])

  return (
  <>
    <section ref={refElement} className="relative flex flex-col sm:flex-row gap-12 flex-wrap items-center sm:items-start justify-evenly min-h-[100vh] w-full pt-24 sm:pt-36 pb-12 px-6 bg-black">
    	<article className="relative z-10 backdrop-blur flex rounded-xl p-6 w-ful sm:w-1/2 max-w-[800px] sm:max-w-[500px] flex-col items-start gap-y-6 sm:gap-y-12">
        <h2 className="text-white font-bold text-4xl px-2 md:text-6xl mt-6 text-center sm:text-left">Welcom to my <b className="text-blue-700 underline decoration-8">blog</b></h2>
        <p className="text-gray-300 text-lg p-4">Programing the <b className="text-blue-700 underline decoration-2">future</b> with us!. Line by line, post by post we want to fix all the bugs there are in the world </p>
      </article>
      <img src={homeImage} alt="This is my dream, passion, etc" className="relative z-10 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full object-cover"/>
      <img src={heroImage} alt="Welcom" className="absolute inset-0 h-full w-full object-cover opacity-50"/>
    </section>
    <main className="flex flex-col gap-y-20 items-center mx-auto mt-8 max-w-[500px] md:max-w-[1000px]">
      <Card className="shadow-lg shadow-gray-600" data-index="1" visibility={!!visiblesSections["1"]} img={whatAreUs} direction="ltr">
        <h3 className="self-center text-xl">What are us?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat!</p>
        <LinkToPage to="/about" text="Learn more about us here!"/>
      </Card>

      <Card className="shadow-lg shadow-gray-600" data-index="2" visibility={!!visiblesSections["2"]} img={whatAreOurWay} direction="rtl">
        <h3 className="self-center text-xl">What do you found?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eveniet exercitationem atque consequatur reprehenderit facere laboriosam reiciendis non fugiat quae corrupti deserunt voluptatibus, enim, nesciunt commodi assumenda, quam inventore excepturi.</p>
        <LinkToPage to="/posts" text="See our posts here!"/>
      </Card>
    </main>
  </>
  )
}

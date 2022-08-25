import { Link } from "react-router-dom";
import Card from "../components/Card"
import heroImage from "../assets/software_developer.jpg";
import whatAreUs from "../assets/persona_usando_computadora_2.jpg";
import whatAreOurWay from "../assets/computadora_con_codigo.jpg";
import useObserver from "../hooks/useObserver";
import { useEffect, useState } from "react";

export default function Home({refElement}) {
  const [visiblesSections, setVisiblesSections] = useState({
    1: false,
    2: false
  })

  const handleVisibility = ({target, finaly, observer}) => {
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
    <section ref={refElement} className="relative min-h-[100vh] w-full pt-36 bg-black">
    	<h2 className="relative z-10 text-white font-bold text-4xl px-2 md:text-6xl mt-6 text-center underline decoration-6">Welcom to my blog</h2>
      <img src={heroImage} alt="Welcom" className="absolute inset-0 h-full w-full object-cover opacity-50"/>
    </section>
    <main className="flex flex-col gap-y-16 items-center mt-8">
      <Card data-index="1" visibility={visiblesSections["1"]} img={whatAreUs} direction="ltr">
        <h3 className="self-center text-xl">What are us?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat!</p>
        <button className="py-2 px-4 bg-blue-700 text-white transition-colors duration-300 hover:text-black hover:bg-sky-300 rounded-lg">
          <Link to="/about">Learn more about us here!</Link>
        </button>
      </Card>

      <Card data-index="2" visibility={visiblesSections["2"]} img={whatAreOurWay} direction="rtl">
        <h3 className="self-center text-xl">What do you found?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eveniet exercitationem atque consequatur reprehenderit facere laboriosam reiciendis non fugiat quae corrupti deserunt voluptatibus, enim, nesciunt commodi assumenda, quam inventore excepturi.</p>
        <button className="py-2 px-4 bg-blue-700 text-white transition-colors duration-300 hover:text-black hover:bg-sky-300 rounded-lg">
          <Link to="/posts">See our posts here!</Link>
        </button>
      </Card>
    </main>
  </>
  )
}

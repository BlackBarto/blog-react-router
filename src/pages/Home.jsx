import { Link } from "react-router-dom";
import Section from "../components/SeactionHome"
import whatAreUs from "../assets/software_developer.jpg";
import whatAreOurWay from "../assets/computadora_con_codigo.jpg";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10 items-center mt-6">
      <h2 className="text-white font-bold text-6xl underline decoration-6">Welcom to my blog</h2>
      <Section img={whatAreUs} direction="ltr">
        <h3 className="self-center text-xl">What are us?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat!</p>
        <button className="py-2 px-4 bg-blue-700 text-white transition-colors duration-300 hover:text-black hover:bg-sky-300 rounded-lg">
          <Link to="/about">Learn more about us here!</Link>
        </button>
      </Section>

      <Section img={whatAreOurWay} direction="rtl">
        <h3 className="self-center text-xl">What do you found?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cupiditate accusamus ipsam inventore harum ut veritatis dicta ipsum nihil vero excepturi nisi ad vitae, praesentium error nobis quidem, dolorum placeat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eveniet exercitationem atque consequatur reprehenderit facere laboriosam reiciendis non fugiat quae corrupti deserunt voluptatibus, enim, nesciunt commodi assumenda, quam inventore excepturi.</p>
        <button className="py-2 px-4 bg-blue-700 text-white transition-colors duration-300 hover:text-black hover:bg-sky-300 rounded-lg">
          <Link to="/products">See our products here!</Link>
        </button>
      </Section>
    </main>
  )
}
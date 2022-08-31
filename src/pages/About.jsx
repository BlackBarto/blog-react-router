import Card from "../components/Card";
import LinkToPage from "../atoms/LinkToPage";
import TextDecoration from "../atoms/TextWithDecoration";
import firstImage from "../assets/coding-g642719bbc_1920.jpg";
import secondmage from "../assets/code-ge54f4caaa_1920.jpg";

export default function About() {
  console.log(window)
  window.scrollTo(0, -(window.screenY) )

  return (
    <>
    <h2 className="px-4 font-bold pt-28 text-center text-3xl text-white mx-auto sm:text-4xl"><TextDecoration className="decoration-red-700">This isn't a blog</TextDecoration>, <TextDecoration className="decoration-blue-700">this is a way to meet me</TextDecoration></h2>
    <main className="pt-12 min-h-body flex flex-col gap-y-20 items-center">
      <Card direction="ltr" img={firstImage} visibility={true}>
        <h3 className="sm:text-3xl text-2xl mx-auto">This is my <TextDecoration className="decoration-red-700">passion</TextDecoration></h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nihil, debitis minus natus blanditiis nulla asperiores explicabo eveniet fuga quo nisi, tempora sequi officiis ipsam modi placeat eos doloremque fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nisi dolor accusamus, aspernatur recusandae, error hic excepturi consequatur ex culpa temporibus sapiente quidem labore in iure libero rem repellat iusto!
        </p>
        <h3 className="sm:text-3xl text-2xl mx-auto">This is my <TextDecoration className="decoration-blue-700">dream</TextDecoration></h3>
        <p className="pb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nihil, debitis minus natus blanditiis nulla asperiores explicabo eveniet fuga quo nisi, tempora sequi officiis ipsam modi placeat eos doloremque fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nisi dolor accusamus, aspernatur recusandae, error hic excepturi consequatur ex culpa temporibus sapiente quidem labore in iure libero rem repellat iusto!
        </p>
        <LinkToPage to="/posts" text="View our posts here!" />
      </Card>
      <Card direction="ltr" img={secondmage} visibility={true}>
        <h3 className="sm:text-3xl text-2xl mx-auto">In my <TextDecoration className="decoration-red-700">hearth</TextDecoration></h3>
        <p className="pb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nihil, debitis minus natus blanditiis nulla asperiores explicabo eveniet fuga quo nisi, tempora sequi officiis ipsam modi placeat eos doloremque fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nisi dolor accusamus, aspernatur recusandae, error hic excepturi consequatur ex culpa temporibus sapiente quidem labore in iure libero rem repellat iusto!
        </p>
        <h3 className="sm:text-3xl text-2xl mx-auto">In my <TextDecoration className="decoration-blue-700">team</TextDecoration></h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nihil, debitis minus natus blanditiis nulla asperiores explicabo eveniet fuga quo nisi, tempora sequi officiis ipsam modi placeat eos doloremque fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nisi dolor accusamus, aspernatur recusandae, error hic excepturi consequatur ex culpa temporibus sapiente quidem labore in iure libero rem repellat iusto!
        </p>
        <LinkToPage to="/contact" text="Contact us here!" />
      </Card>
    </main>
    </>
  )
}
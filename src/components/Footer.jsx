import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="border-t-2">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-8 text-black">
            <div className=" text-lg font-bold">i-varotra</div>
            <p className="text-[15px] font-bold">Coder with 🖤 by Eddy Léon.</p>
            <div className="flex items-center space-x-3">
              <a href="#!"><BsFacebook size={20} /></a>
              <a href="#!"><AiFillGithub size={23} /></a>
              <a href="#!"><AiFillTwitterCircle size={23} /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer
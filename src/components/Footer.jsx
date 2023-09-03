import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="border-t-2">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-3 sm:px-8 px-4 text-black">
            <div className="hidden sm:block text-lg font-bold">i-varotra</div>
            <p className="text-sm sm:text-[15px] font-bold">Coder with 🖤 by Eddy Léon.</p>
            <div className="flex items-center space-x-3">
              <a href="#!" className="text-lg sm:text-xl"><BsFacebook /></a>
              <a href="#!" className="text-xl sm:text-2xl"><AiFillGithub /></a>
              <a href="#!" className="text-xl sm:text-2xl"><AiFillTwitterCircle /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer
import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom"
import { BsFillBagCheckFill } from "react-icons/bs";



function Navbar() {

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <section className="">
        <nav className="flex justify-between items-center max-w-6xl mx-auto py-3 sm:px-8 px-4 text-black">
            <Link to='/i-varotra--commerce-/'>
                <h1 className="flex items-center text-2xl font-bold">i-varotra</h1>
            </Link>
            <div className="cursor-pointer">
                <BsFillBagCheckFill onClick={()=> setIsOpen(!isOpen) } size={24} />
            </div>
        </nav>
    </section>
    
  )

}

export default Navbar
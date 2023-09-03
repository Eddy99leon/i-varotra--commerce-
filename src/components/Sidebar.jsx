import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"
import CartItem from "../components/CartItem"
import { SidebarContext } from "../contexts/SidebarContext"
import { CartContext } from "../contexts/CartContext"



const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart} = useContext(CartContext);

  return (
    <div 
      className={`
        ${isOpen ? "right-0" : "-right-full"}
        " w-full md:w-[55vw] lg:w-[40vw] h-full bg-white  fixed shadow-2xl top-0 transition-all duration-300 z-20 px-4 sm:px-8 "
      `}
    >
      <div className="flex justify-between items-center py-4">
        <div className="text-base font-bold">Pannier (0)</div>
        <div className="flex justify-center items-center cursor-pointer w-8 h-8">
          <IoMdArrowForward onClick={handleClose} className="text-xl" />
        </div>
      </div>
      <div>
        {cart.map(item => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div>
        <div className="flex justify-between items-center py-4">
          <div className="font-semibold">
            <span className="font-bold mr-2">Total:</span> $1000
          </div>
          <div onClick={clearCart} className="flex items-center justify-center text-white text-xl cursor-pointer py-4 w-10 h-10 bg-black">
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Sidebar

import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext"


const CartItem = ({item}) => {
  const { id, title, image, price, amount } = item ;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext)
  
  return (
    <div className="flex py-2 border-b-2">

      <div className="w-full min-h-[150px] flex items-center gap-x-4">

        <Link onClick={() => setIsOpen(false)} to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>

        <div className="flex flex-col w-full ml-2">
          <div className="flex items-center justify-between mb-2">
            <Link onClick={() => setIsOpen(false)} to={`/product/${id}`} className="text-sm font-semibold">
              {title}
            </Link>
            <div>
              <IoMdClose onClick={() => removeFromCart(id)} className="text-xl text-gray-500 transition cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="flex items-center text gap-x-2 h-[36px] text-sm">
            <div className="flex items-center border-2">
              <div onClick={()=> decreaseAmount(id)} className="p-1">
                <IoMdRemove className="text-sm cursor-pointer" />
              </div>
              <div className="px-1 font-semibold text-md">{amount}</div>
              <div onClick={()=> increaseAmount(id)} className="p-1">
                <IoMdAdd className="text-sm cursor-pointer" />
              </div>
            </div>
            <div className="ml-6 font-semibold"> $ {price}</div>
            <div className="flex justify-end flex-1 font-semibold">
              $ {`${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CartItem

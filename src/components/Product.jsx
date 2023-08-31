import React, {useContext} from "react"
import { BsEyeFill, BsPlus } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"



const Product = ({product}) => {
  const { addToCart } = useContext(CartContext);
  //destructure product.. afaka tsy atao
  const { id, image, category, title, price } = product

  return (
    <div className="w-full max-w-[300px] mx-auto">

      <div className="relative border-2 border-gray-200 overflow-hidden h-[300px] group transition">
        <div className=" w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
           <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt="" />
          </div>
        </div>
        <div className="absolute top-4 -right-12 group-hover:right-3 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={()=> addToCart(product)}>
            <div className="flex justify-center items-center bg-black text-white w-10 h-10 mb-2">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link to={`/product/${id}`} className="flex justify-center items-center bg-gray-300 w-10 h-10 drop-shadow-xl">
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 font-semibold mb-1">{category}</div>
        <Link to={`/product/${id}`}>
         <h2 className=" font-semibold mb-1">{title}</h2>
        </Link>
        <div className="flex justify-between items-center mt-2 px-1">
          <div className="font-bold ">$ {price}</div>
          <button onClick={()=> addToCart(product)} className="bg-black text-white px-3 py-1 text-sm font-semibold">
            Ajouter au pannier
          </button>
        </div>
      </div>

    </div>
  )
}

export default Product

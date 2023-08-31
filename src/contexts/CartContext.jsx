import React, {createContext, useState, useEffect, useContext} from "react"
import { NotifContext } from "./NotifContext";



export const CartContext = createContext();

const CartProvider = ({children}) => {
  const { setNotif } = useContext(NotifContext)
  const [cart, setCart] = useState([]);

  // ajouter au pannier
  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };
    // verifier si l'item est dans la panier
    const cartItem = cart.find((item) => {
      return item.id === product.id;
    })
    //si l'item est deja dans le pannier
    if (cartItem) {
      const newCart = [...cart].map(item=> {
        if(item.id === product.id) {
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // si l'item est pas encore dans le pannier
      setCart([...cart, newItem]);
    }
    // affichage de notification
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 1000);
  };

  // supprimer un item
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id ;
    })
    setCart(newCart);
  }

  // vider le pannier
  const clearCart = () => {
    const newCart = [] ;
    setCart(newCart);
  }

  // incrementer l'amount
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id ;
    });
    addToCart(cartItem)
  }

  // decrementer l'amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id ;
    });
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
    if (cartItem.amount >= 2) {
      const newCart = cart.map(item=> {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      increaseAmount, 
      decreaseAmount 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

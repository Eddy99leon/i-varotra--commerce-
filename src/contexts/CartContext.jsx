import React, {createContext, useState, useEffect} from "react"



export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === product.id;
    })
    //if cart item is already to the cart
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
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id ;
    })
    setCart(newCart);
  }

  // clear cart
  const clearCart = () => {
    const newCart = [] ;
    setCart(newCart);
  }

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id ;
    });
    addToCart(cartItem)
  }

  // decrease amount
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

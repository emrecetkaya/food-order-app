import React, { useState } from 'react'
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider"

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartButtonHandler = () => {
    setIsCartOpen(true);
  }

  const closeCartHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <CartProvider>
      <Header onCartClickHandler={cartButtonHandler} />
      {isCartOpen && <Cart onCloseClickHandler={closeCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
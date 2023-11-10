import { useState } from "react";

import Cart from "./Cart.tsx";
import { useStoreSelector } from "../store/hooks.ts";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const totalItems = useStoreSelector((state) => state.cart.items).reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p className="cart-btn-wrapper">
          <button onClick={handleOpenCartClick}>Cart ({totalItems})</button>
        </p>
      </header>
    </>
  );
}

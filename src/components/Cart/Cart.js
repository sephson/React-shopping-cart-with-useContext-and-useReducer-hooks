import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import CartItem from "./CartItem";

function Store() {
  const { items } = useContext(AppContext);

  return (
    <div className="cart">
      <h2 style={{ color: "tomato" }} className="cart-cart">
        Cart({items.length})
      </h2>
      <div className="cart-comp">
        <CartItem price={400} productName="Cars" />
        <CartItem price={350} productName="Bottles" />
      </div>
      <h2>Total: $120000</h2>
    </div>
  );
}

export default Store;

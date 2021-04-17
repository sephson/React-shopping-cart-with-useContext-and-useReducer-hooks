import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function CartItem({ price, productName }) {
  const { count, increaseQuantity, decreaseQuantity } = useContext(AppContext);
  return (
    <div className="cart-items">
      <div className="cart-item">
        <h2 className="item-header">{productName}</h2>
        <p className="price">Price: $ {count * price} </p>
        <div className="cart-ops">
          <p>
            QTY:<h3>{count}</h3>
          </p>
          <div className="butt">
            <button onClick={increaseQuantity} className="increase">
              +
            </button>
            <button onClick={decreaseQuantity} className="decrease">
              -
            </button>
            <button className="rmbtn">Del</button>
          </div>
        </div>
      </div>
      <div className="sum"></div>
    </div>
  );
}

export default CartItem;

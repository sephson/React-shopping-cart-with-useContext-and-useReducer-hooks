import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

function Item({ product, productName, Price }) {
  const { addItemToCart } = useContext(AppContext);
  return (
    <div className="item">
      <h2 className="item-header">{productName}</h2>
      <p className="price">Price: ${Price} </p>
      <Link to="/Cart">
        <button onClick={addItemToCart(product)} className="addbtn">
          Add
        </button>
      </Link>
    </div>
  );
}

export default Item;

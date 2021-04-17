import React, { useState, useReducer } from "react";
import AppContext from "./AppContext";
import Reducer from "./Reducer";

import { increaseQty, decreaseQty, addToCart, delFromCart } from "./Action.js";

function AppState({ children }) {
  // const [click, setClick] = useState(false);

  const initialState = {
    // count: 1,
    items: [],
  };

  const products = [
    {
      id: 1,
      productName: "Car",
      price: 490,
    },
    {
      id: 2,
      productName: "Tyres",
      price: 500,
    },
    {
      id: 3,
      productName: " Bicycle",
      price: 500,
    },

    {
      id: 4,
      productName: "Radio",
      price: 260,
    },
  ];

  const [state, dispatch] = useReducer(Reducer, initialState);

  const increaseQuantity = (count) => {
    dispatch({ type: increaseQty, payload: count });
  };

  const decreaseQuantity = (count) => {
    dispatch({ type: decreaseQty, payload: count });
  };

  const addItemToCart = (item) => {
    dispatch({ type: addToCart, payload: item });

    console.log(item);
  };
  return (
    <AppContext.Provider
      value={{
        count: state.count,
        items: state.items,
        products,
        // increaseQuantity,
        // decreaseQuantity,
        addItemToCart,
        cartNumber: state.cartNumber,
        // click,
        // setClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppState;

// import React from "react";
import { increaseQty, decreaseQty, addToCart, delFromCart } from "./Action.js";

const Reducer = (state, action) => {
  switch (action.type) {
    case increaseQty:
      return { ...state, count: state.count + 1 };

    case decreaseQty:
      return { ...state, count: state.count - 1 };

    case addToCart:
      return { ...state, items: action.item }; //the spread opertor takes the array element out of the array and spreads it

    case delFromCart:
      return {};

    default:
      return state;
  }
};

export default Reducer;

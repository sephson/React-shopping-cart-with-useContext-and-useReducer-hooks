import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

// import CartItem from "./CartItem";
import Item from "./Item";

function Store() {
  const { products, items } = useContext(AppContext);

  return (
    <div className="store">
      {/* <h1>Store</h1> */}
      <h2 style={{ color: "tomato", textAlign: "right" }} className="cart-cart">
        Cart({items.length})
      </h2>
      <div className="products">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              productName={product.productName}
              Price={product.price}
              product={product}
            />
          );
        })}
        {/* <Item id={1} productName="Car" Price={500} />
        <Item id={2} productName="Tyres" Price={2000} />
        <Item id={3} productName="Bicycle" Price={600} />
        <Item id={4} productName="House" Price={50000} />
        <Item id={5} productName="Chairs" Price={450} />
        <Item id={6} productName="TV" Price={20} />
        <Item id={7} productName="Glasses" Price={10} />
        <Item id={8} productName="Dildo" Price={40} />
        <Item id={9} productName="Cake" Price={20} />
        <Item id={10} productName="Suit" Price={640} />
        <Item id={11} productName="Piano" Price={3900} />
        <Item id={12} productName="Icecream" Price={80} />
        <Item id={13} productName="Refrigerator" Price={220} /> */}
      </div>
    </div>
  );
}

export default Store;

  import React, { useState } from "react";
  import DishesCard from "../layouts/DishesCards";
  import menuData from "../js/menu";
  import Cart from "./Cart";
  // import { Link } from 'react-router-dom';

  const Menu = () => {
    const [cart, setCart] = useState([]);
    


    const addToCart = (item) =>{
      const updatedCart = [...cart, item]
      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    }
    const hey = (title) => {
      console.log(`Agregando al carrito: ${title}`);
    };

    return (
      <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
  <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
    Premium Menu
  </h1>

  <div className="flex flex-wrap gap-8 justify-center">
    {menuData.map((item) => (
      <div key={item.id} className="w-1/2">
        <DishesCard title={item.title} price={item.price} img={item.img} />
        <button onClick={() => addToCart({ title: item.title, price: item.price })}>
          Agregar al Carrito
        </button>
      </div>
    ))}
  </div>
</div>

    );
  };

  export default Menu;

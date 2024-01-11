import React, { useEffect, useState, useRef } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const cartRef = useRef(null);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storeCart);
  }, []);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePurchase = () => {
    alert('¡Su pedido está en camino!');
    // Aquí podrías realizar acciones adicionales, como enviar la orden a un servidor, etc.
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Carrito de la orden
      </h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                <div>
                  <p>{item.title}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p className="font-bold text-xl mb-2">Total: ${getTotal().toFixed(2)}</p>
          <button
            onClick={handlePurchase}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}

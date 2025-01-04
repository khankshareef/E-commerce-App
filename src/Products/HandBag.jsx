import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HandBag.css';
import { DataContext } from './Routers'; // Import your cart context

function HandBag() {
  const [handbags, setHandbags] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access cart context

  useEffect(() => {
    const fetchHandbags = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        const data = await response.json();
        setHandbags(data);
      } catch (error) {
        console.error('Error fetching handbags:', error);
      }
    };

    fetchHandbags();
  }, []);

  const addToCart = (handbag) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === handbag.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === handbag.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...handbag, quantity: 1 }];
    });

    toast.success(`${handbag.title} added to cart!`);
  };

  return (
    <div className="handbag-container">
      <ToastContainer position="top-center" />
      <h1>Jewelery Collection</h1>

      <div className="handbag-list">
        {handbags.map((handbag) => (
          <div className="handbag-card" key={handbag.id}>
            <img src={handbag.image} alt={handbag.title} className="handbag-image" />
            <div className="handbag-info">
              <h3>{handbag.title}</h3>
              <p>Price: ${handbag.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(handbag)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HandBag;
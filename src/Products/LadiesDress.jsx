import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Ladies.css';
import { DataContext } from './Routers';

function LadiesDress() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses = await data.json();
      setDresses(dresses);
    };
    fetchData();
  }, []);

  const addToCart = (dress) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === dress.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === dress.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...dress, quantity: 1 }];
    });
    toast.success(`${dress.title} added to cart!`);
  };

  const handleViewDetails = (dress) => {
    navigate(`/ProductDetails`, { state: { dress } }); // Pass dress data via state
  };

  return (
    <div className="show-women">
      <ToastContainer position="top-center" />
      <h1>Women's Dresses Collection</h1>
      <div className="dress-list">
        {dresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <img
              src={dress.image}
              alt={dress.title}
              className="dress-image"
              onClick={() => handleViewDetails(dress)} // Navigate to details page
              style={{ cursor: 'pointer' }}
            />
            <div className="dress-info">
              <h3>{dress.title}</h3>
              <p>Price: ${dress.price}</p>
              <button className="button-cart" onClick={() => addToCart(dress)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LadiesDress;

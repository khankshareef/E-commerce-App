import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from './Routers'; // Import your context
import './ShowKid.css';

function ShowKids() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access context

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/category/kid's clothing");
      const data = await response.json();

      // Check if data is empty or null
      if (data && data.length > 0) {
        // Simulating multiple data sets by duplicating the fetched data
        const multipleDresses = [...data, ...data, ...data]; // Duplicate data three times
        setDresses(multipleDresses);
      }
    };

    fetchData();
  }, []);

  const addToCart = (dress) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === dress.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === dress.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...dress, quantity: 1 }];
    });

    // Show toast notification
    toast.success(`${dress.title} added to cart!`);
  };

  return (
    <div className="show-kids">
      <ToastContainer />

      <h1>Kids' Clothing Collection</h1>

      <div className="product-display">
        
      <div className='single-data'>
        <div className="single-image">
          <img
            src="https://img.freepik.com/free-photo/full-shot-smiley-girl-with-flowers_23-2149067166.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid"
            alt="Kids Clothing"
          />
           <h2>Adorable Vintage-Style Girl's Pinafore Dress</h2>
  <p className="price">Price: $39.99</p>

  <div className="available-size">
    <h3>Available Sizes:</h3>
    <div className="size-buttons">
      <button className="size-button1">S</button>
      <button className="size-button2">M</button>
      <button className="size-button3">L</button>
      <button className="size-button4">XL</button>
    </div>
  </div>

  <div className="available-color">
    <h3>Available Colors:</h3>
    <div className="color-buttons">
      <button className="color-button red">Red</button>
      <button className="color-button blue">Blue</button>
      <button className="color-button black">Black</button>
      <button className="color-button green">Green</button>
    </div>
  </div>

  <button className="cart-button">Add to Cart</button>
        </div>
        </div>
      </div>

      <div className="dress-list">
        {dresses.length > 0 ? (
          dresses.map((dress) => (
            <div className="dress-card" key={dress.id}>
            <Link to='/ProductDetails'>  <img src={dress.image} alt={dress.title} className="dress-image" /></Link>
              <div className="dress-info">
                <h3>{dress.title}</h3>
                <p>Price: ${dress.price}</p>

                <div className="sizes">
                  <strong>Available Sizes:</strong>
                  <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                  </ul>
                </div>

                <div className="colors">
                  <strong>Available Colors:</strong>
                  <ul>
                    <li>Red</li>
                    <li>Blue</li>
                    <li>Pink</li>
                    <li>Green</li>
                  </ul>
                </div>

                {/* Add to Cart Button */}
                <button className="add-to-cart-btn" onClick={() => addToCart(dress)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading dresses...</p>
        )}
      </div>
    </div>
  );
}

export default ShowKids;

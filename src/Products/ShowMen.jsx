import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from './Routers'; // Import your context
import './ShowMen.css';

function ShowMen() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access context

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const dresses1 = await data1.json();

      const data2 = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const dresses2 = await data2.json();

      const data3 = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const dresses3 = await data3.json();

      setDresses([...dresses1, ...dresses2, ...dresses3]);
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
    <div className="show-men">
      <ToastContainer />
      <h1>Men's Clothing Collection</h1>

      <div className="single-image" style={{ marginBottom: '50px' }}>
        <img
          src="https://img.freepik.com/premium-photo/confident-young-man-stylish-darkhaired-man-standing-holding-one-hand-trousers-pocket-looking_386167-2361.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid"
          alt="Stylish Man"
        />
      </div>

      <div className="dress-list">
        {dresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <img src={dress.image} alt={dress.title} className="dress-image" />
            <div className="dress-info">
              <h3>{dress.title}</h3>
              <p>Price: ${dress.price}</p>

              <div className="sizes">
                <strong>Available Sizes:</strong>
                <ul>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                </ul>
              </div>

              <div className="colors">
                <strong>Available Colors:</strong>
                <ul>
                  <li>Red</li>
                  <li>Blue</li>
                  <li>Black</li>
                  <li>Green</li>
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button className="add-to-cart-btn" onClick={() => addToCart(dress)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowMen;
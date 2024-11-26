import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Ladies.css';
import { DataContext } from './Routers'; // Import your context

function LadiesDress() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access context for cart state

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses1 = await data1.json();

      const data2 = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses2 = await data2.json();

      const data3 = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses3 = await data3.json();

      setDresses([...dresses1, ...dresses2, ...dresses3]);
    };

    fetchData();
  }, []);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

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

    // Show toast notification when added to cart
    toast.success(`${dress.title} added to cart!`);
  };

  return (
    <div className="show-women">
      <ToastContainer position="top-center" />

      <h1>Women's Dresses Collection</h1>

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
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <li
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={selectedSize === size ? 'selected' : ''}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="colors">
                <strong>Available Colors:</strong>
                <ul>
                  {['Red', 'Blue', 'Black', 'Green'].map((color) => (
                    <li
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={selectedColor === color ? 'selected' : ''}
                    >
                      {color}
                    </li>
                  ))}
                </ul>
              </div>
  {/* Add to Cart Button */}
  <div>
                <button onClick={() => addToCart(dress)}>Add to Cart</button>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LadiesDress;

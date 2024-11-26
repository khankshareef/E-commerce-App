import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../Products/Routers'; // Import the context
import './Product3.css';

function Product3({ selectedCategory }) {
  const [clothingData, setClothingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, setCart } = useContext(DataContext); // Access the cart context

  const fetchClothingData = async () => {
    const apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setClothingData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClothingData();
  }, [selectedCategory]); // Refetch when the category changes

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        toast.info(`${item.title} quantity updated!`);  // Show a toast notification
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      toast.success(`${item.title} added to cart!`);  // Show a toast notification
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0) // Remove items with quantity 0
    );
    toast.error('Item removed from cart!');  // Show a toast notification
  };

  if (loading) {
    return <div className="loading">Loading products, please wait...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="clothing-list">
      <ToastContainer position="top-center" />  {/* Display toast in the center-top */}
      <div className="clothing-grid">
        {clothingData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.description.length > 200
                  ? item.description.slice(0, 200) + '...'
                  : item.description}
              </p>
              <p style={{ marginBottom: '40px' }}>Price: ${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                type="button"
                className="btn btn-warning buttonss"
              >
                Clear
              </button>
              <button
                onClick={()=> addToCart(item)}
                type="button"
                className="btn btn-primary mx-5 buttons"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product3;
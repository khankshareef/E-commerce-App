import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Ladies.css';
import { DataContext } from './Routers';

function LadiesDress() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const dresses = await response.json();
        setDresses(dresses);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast.success(`${product.title} added to cart!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  const handleViewDetails = (dress) => {
    navigate('/ProductDetails', { state: { dress } }); // Pass the specific product as state
  };

  return (
    <div className="show-women">
      <Link to="/app">
        <h3>
          <ArrowBackIcon />
          Back
        </h3>
      </Link>
      <ToastContainer position="top-center" />
      <h1>Women's Dresses Collection</h1>
      <div className="dress-list">
        {dresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <img
              src={dress.image}
              alt={dress.title}
              className="dress-image"
              style={{ cursor: 'pointer' }}
            />
            <div className="dress-info">
              <h3>{dress.title}</h3>
              <p>Price: ${dress.price}</p>
              <div className="view-button">
                <button className="buy-button" onClick={() => addToCart(dress)}>
                  Add to
                </button>
                <button className="buy-button" onClick={() => handleViewDetails(dress)}>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LadiesDress;

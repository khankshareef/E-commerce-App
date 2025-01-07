import DangerousIcon from '@mui/icons-material/Dangerous';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HandBag.css';
import { DataContext } from './Routers';

function HandBag() {
  const [handbags, setHandbags] = useState([]);
  const { setCart } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHandbags = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/category/jewelery'
        );
        const data = await response.json();
        setHandbags(data);
      } catch (error) {
        console.error('Error fetching handbags:', error);
      }
    };

    fetchHandbags();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);

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

  const handleViewDetails = (product) => {
    // Navigate to the ProductDetails component with the selected product
    navigate('/ProductDetails', { state: { product } });
  };

  return (
    <div className="handbag-container">
      <ToastContainer position="top-center" />
      <h1>Jewelery Collection</h1>

      <div className="handbag-list">
        {handbags.map((handbag) => (
          <div className="handbag-card" key={handbag.id}>
            <img
              src={handbag.image}
              alt={handbag.title}
              className="handbag-image"
            />
            <div className="handbag-info">
              <h3>{handbag.title}</h3>
              <p>Price: ${handbag.price}</p>
              <div className="view-button">
                <button
                  className="buy-button"
                  onClick={() => addToCart(handbag)}
                >
                  Add to 
                </button>
                <button
                  className="buy-button"
               
                >
                  View <DangerousIcon/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HandBag;

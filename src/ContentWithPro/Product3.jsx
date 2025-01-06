import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../Products/Routers';
import './Product3.css';

function Product3({ selectedCategory }) {
  const [clothingData, setClothingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cart, setCart } = useContext(DataContext); // Access cart context
  const navigate = useNavigate(); // Hook to navigate

  // Map category to API URLs
  const categoryApiMap = {
    "women's clothing": 'https://fake-api-e9d32-default-rtdb.firebaseio.com/women.json',
    "men's clothing": 'https://fake-api-e9d32-default-rtdb.firebaseio.com/men.json',
    "kids clothing": "https://fake-api-e9d32-default-rtdb.firebaseio.com/kid's.json",
  };

  // Fetch clothing data based on selectedCategory
  const fetchClothingData = async () => {
    const apiUrl = categoryApiMap[selectedCategory];
    if (!apiUrl) {
      setError('');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      // Extract data from the nested structure
      const formattedData = Object.keys(data).flatMap((key) => {
        const nestedData = data[key];
        return Array.isArray(nestedData)
          ? nestedData.map((item) => ({ id: key, ...item }))
          : [];
      });

      setClothingData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchClothingData();
  }, [selectedCategory]);

  // Add to cart function
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Add the item as a new entry every time
      toast.success(`${item.name} added to cart!`);
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleProductClick = (product) => {
    navigate('/productdetails', { state: { dress: product } }); // Pass product details
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="clothing-list">
      <ToastContainer position="top-center" />
      <div className="clothing-grid">
        {clothingData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                {item.description?.length > 200
                  ? `${item.description.slice(0, 200)}...`
                  : item.description || 'No description available'}
              </p>
              <p className='product-price' style={{ marginBottom: '40px' }}>Price: ${item.price}</p>
              <div className='product1-buttons'>
              <button 
                onClick={() => addToCart(item)}
                type="button"
                className="btn btn-primary buttons"
              >
                Add to
              </button>
              <button
                onClick={() => handleProductClick(item)}
                className="btn btn-info"
              >
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

export default Product3;

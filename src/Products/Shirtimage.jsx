import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Menimage.css';
import { DataContext } from './Routers';

function Menimage() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Duplicate or modify data to reach 20+ items
        const extendedData = Array.from({ length: 4 }, () => data).flat(); // Repeat data 4 times
        setProducts(extendedData.slice(0, 20)); // Trim to exactly 20 items
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenProducts();
  }, []);

 const addToCart = (item) => {
     setCart((prevCart) => {
       const updatedCart = [...prevCart, { ...item, quantity: 1 }];
 
       toast.success(`${item.title} added to cart!`, {
         position: "top-center",
         autoClose: 3000, // Auto-hide after 3 seconds
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "light",
       });
 
       return updatedCart;
     });
   };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="men-container">
      <ToastContainer position="top-center" />
      <Link to='/app'>
      <h3><ArrowBackIcon/>Back</h3>
      </Link>
      <h1>Men's Clothing Collection</h1>
      <div className="men-products">
        {products.map((product, index) => (
          <div className="men-product-card" key={index}>
              <img src={product.image} alt={product.title} className="product-image" />
           
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <div className='view-button'>

            <button className="buy-button" onClick={() => addToCart(product)}>
              Add to
            </button>
            <Link to="/ProductDetails" state={{ dress: product }}>
            <button className="buy-button" onClick={() => addToCart(product)}>
              View
            </button>
            </Link>
            </div>

            <div className="sizes">
              <h3>Sizes</h3>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>

            <div className="colors">
              <h3>Colors</h3>
              <ul>
                <li style={{ backgroundColor: 'black' }}></li>
                <li style={{ backgroundColor: 'blue' }}></li>
                <li style={{ backgroundColor: 'green' }}></li>
                <li style={{ backgroundColor: 'red' }}></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menimage;
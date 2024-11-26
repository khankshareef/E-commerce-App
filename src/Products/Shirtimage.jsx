import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from './Routers'; // Import your context
import './Shirtimage.css';

function Shirtimage() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access context

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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === product.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Show toast notification
    toast.success(`${product.title} added to cart!`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="men-container">
      <ToastContainer />
      <h1>Men's Clothing</h1>

      <div className="men-products">
        {products.map((product, index) => (
          <div className="men-product-card" key={index}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>

            {/* Add to Cart Button */}
            <button className="buy-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

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

export default Shirtimage;
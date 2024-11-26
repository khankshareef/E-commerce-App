import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HandBag.css';
import { DataContext } from './Routers'; // Import your cart context

function Slippers() {
  const [slippers, setSlippers] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access cart context

  useEffect(() => {
    const fetchSlippers = async () => {
      try {
        // Fetching general product data from fakestoreapi
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Filter the data to get slippers (you can filter based on title or category)
        const slippersData = data.filter(item =>
          item.title.toLowerCase().includes('slipper') || item.category.toLowerCase().includes('footwear')
        );
        
        setSlippers(slippersData);
      } catch (error) {
        console.error('Error fetching slippers:', error);
      }
    };

    fetchSlippers();
  }, []);

  const addToCart = (slipper) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === slipper.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === slipper.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...slipper, quantity: 1 }];
    });

    toast.success(`${slipper.title} added to cart!`);
  };

  return (
    <div className="handbag-container">
      <ToastContainer position="top-center" />
      <h1>Slippers Collection</h1>

      <div className="handbag-list">
        {slippers.map((slipper) => (
          <div className="handbag-card" key={slipper.id}>
            <img src={slipper.image} alt={slipper.title} className="handbag-image" />
            <div className="handbag-info">
              <h3>{slipper.title}</h3>
              <p>Price: ${slipper.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(slipper)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slippers;

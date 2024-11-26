import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Correct import of Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { DataContext } from '../Products/Routers'; // Correct import of DataContext
import './ShowWomen.css';

function ShowWomen() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Correct context usage

  useEffect(() => {
    // Fetching the data multiple times to get more dresses
    const fetchData = async () => {
      const data1 = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses1 = await data1.json();

      const data2 = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses2 = await data2.json();

      const data3 = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const dresses3 = await data3.json();

      // Concatenating all data together to simulate 20+ items
      setDresses([...dresses1, ...dresses2, ...dresses3]);
    };

    fetchData();
  }, []);

  // Handle Add to Cart
  const addToCart = (dress) => {
    const existingItem = cart.find((cartItem) => cartItem.id === dress.id);

    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === dress.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...dress, quantity: 1 }]);
    }

    toast.success(`${dress.title} added to cart!`);  // Toast notification
  };

  return (
    <div className="show-women">
      <h1>Women's Dresses Collection</h1>

      <div className="single-image" style={{ marginBottom: '50px' }}>
        <img
          src="https://img.freepik.com/free-photo/stylish-woman-spending-time-summer-field_1157-36070.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid"
          alt="Stylish Woman"
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

              <button className="add-to-cart-btn" onClick={() => addToCart(dress)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Container for Toastify */}
      <ToastContainer />
    </div>
  );
}

export default ShowWomen;
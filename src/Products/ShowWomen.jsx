import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../Products/Routers'; // Correct import of DataContext
import './ShowWomen.css';

function ShowWomen() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext); // Correct context usage
  const navigate = useNavigate();

  useEffect(() => {
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
        cartItem.id === dress.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...dress, quantity: 1 }]);
    }
    toast.success(`${dress.title} added to cart!`);  // Toast notification
  };

  // Handle View button to navigate to ProductDetails
  const handleView = (dress) => {
    navigate('/productdetails', { state: { dress } });
  };

  return (
    <div className="show-women">
      <h1>Women's Dresses Collection</h1>
      <div className="product-display">
        <div className='single-data'>
          <div className="single-image">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg"
              alt="Kids Clothing"
            />
            <h2>Adorable Vintage-Style Girl's Pinafore Dress</h2>
            <p className="price">Price: $39.99</p>
            <div className="available-size">
              <h3>Available Sizes:</h3>
              <div className="size-buttons">
                <button className="size-button1">S</button>
                <button className="size-button2">M</button>
                <button className="size-button3">L</button>
                <button className="size-button4">XL</button>
              </div>
            </div>
            <div className="available-color">
              <h3>Available Colors:</h3>
              <div className="color-buttons">
                <button className="color-button red">Red</button>
                <button className="color-button blue">Blue</button>
                <button className="color-button black">Black</button>
                <button className="color-button green">Green</button>
              </div>
            </div>
            <button className="cart-button">Add to Cart</button>
          </div>
        </div>
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
              <div className="women-add-buttons">
                <button className="add-to-cart-btn" onClick={() => addToCart(dress)}>
                  Add
                </button>
                <button className="add-to-cart-btn" onClick={() => handleView(dress)}>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default ShowWomen;

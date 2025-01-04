import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        cartItem.id === dress.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...dress, quantity: 1 }]);
    }
    toast.success(`${dress.title} added to cart!`);  // Toast notification
  };

  return (
    <div className="show-women">
      <h1>Women's Dresses Collection</h1>
      <div className='single-data'>

      <div className="single-image">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg"
          alt="Stylish Woman"
          className="product-image"
        />
        <h2>Women's Casual White T-Shirt with Embroidered Floral Destgn and Blue Tie-Waist Pant</h2>
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

      <div className="dress-list">
        {dresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <Link to={{ pathname: '/ProductDetails', state: { dress } }}>
              <img src={dress.image} alt={dress.title} className="dress-image" />
            </Link>

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

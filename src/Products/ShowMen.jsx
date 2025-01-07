import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from './Routers'; // Import your context
import './ShowMen.css';

function ShowMen() {
  const [dresses, setDresses] = useState([]);
  const { cart, setCart } = useContext(DataContext);  // Access context
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const dresses1 = await data1.json();

      const data2 = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const dresses2 = await data2.json();

      const data3 = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const dresses3 = await data3.json();

      setDresses([...dresses1, ...dresses2, ...dresses3]);
    };

    fetchData();
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

  const handleView = (dress) => {
    navigate('/productdetails', { state: { dress } });
  };

  return (
    <div className="show-men">
      <ToastContainer />
      <Link to='/app'>
      <h3><ArrowBackIcon/>Back</h3>
      </Link>
      <h1>Men's Clothing Collection</h1>

      <div className="single-data">
        <div className="single-image" style={{ marginBottom: '50px' }}>
          <img
            src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/89b457ae-5fc2-477a-92a8-f8e5b70e748a._CR0,0,1200,628_SX920_QL70_.jpg"
            alt="Stylish Man"
          />
          <h2>Men's Formal Red Shirt with Black Trousers</h2>
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

          <button className="cart-button" onClick={() => addToCart(dresses[0])}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="dress-list">
        {dresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <img
              src={dress.image}
              alt={dress.title}
              className="dress-image"
            />
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
              <div className="sizes">
                <strong>Available Colors:</strong>
                <ul>
                  <li>Red</li>
                  <li>Blue</li>
                  <li>Black</li>
                  <li>Green</li>
                </ul>
              </div>
              <div className="men-add-buttons">
                <button className="add-to-cart-btn" onClick={() => addToCart(dress)}>
                  Add
                </button>
                <button className="view-btn" onClick={() => handleView(dress)}>
                  <span className='view-buttom'>View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowMen;


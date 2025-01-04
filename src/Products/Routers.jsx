import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from '../App';
import Herotype from '../Components/Herotype';
import Nav3Comp from '../Components/Nav3Comp';
import Navbar from '../Components/Navbar';
import ProductDetails from '../Components/ProductDetails';
import Product3 from '../ContentWithPro/Product3';
import AddingData from '../Registration/AddingData';
import Login from '../Registration/Login';
import Main from '../Registration/Main';
import Register from '../Registration/Register';
import Cart from './Cart';
import Footer from './Footer';
import HandBag from './HandBag';
import LadiesDress from './LadiesDress';
import Menimage from './Menimage';
import Shirtimage from './Shirtimage';
import ShowKid from './ShowKid';
import ShowMen from './ShowMen';
import ShowWomen from './ShowWomen';

// Create Context
const DataContext = createContext();

function Routers() {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== itemId);
      }
      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <Router>
      <div className="Routers-con">
        <Navbar />

        {/* Provide the context for the entire app */}
        <DataContext.Provider value={{ cart, setCart }}>
          <Herotype cart={cart} />
          <Nav3Comp addToCart={addToCart} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/app" element={<App />} />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity} />
              }
            />
            <Route path="/women" element={<ShowWomen data={'https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg'} />} />
            <Route path="/men" element={<ShowMen />} />
            <Route path="/kids" element={<ShowKid />} />
            <Route path="/menimage" element={<Menimage />} />
            <Route path="/shirt" element={<Shirtimage />} />
            <Route path="/ladies" element={<LadiesDress />} />
            <Route path="/handbag" element={<HandBag />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/addingdata" element={<AddingData />} /> {/* Adding data route */}
            <Route path="/product3" element={<Product3 selectedCategory="women's clothing" />} /> {/* Product3 route */}
          </Routes>
        </DataContext.Provider>

        <Footer />
      </div>
    </Router>
  );
}

export default Routers;
export { DataContext };

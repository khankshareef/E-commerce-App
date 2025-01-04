import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../Products/Routers";
import "./ProductDetails.css";

function ProductDetails() {
  const { cart, setCart } = useContext(DataContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { dress } = location.state || {};

  useEffect(() => {
    if (!dress) {
      console.error("No product details available");
      toast.error("Product details not available");
    }
  }, [dress]);

  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleColorSelect = (color) => setSelectedColor(color);

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color!");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === dress.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === dress.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...dress, quantity: 1, selectedSize, selectedColor }];
    });
    toast.success(`${dress.title} added to cart!`);
  };

  if (!dress) {
    return (
      <div>
        <p>No product details available</p>
        <button onClick={() => navigate("/product-list")}>Back to Collection</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h1>{dress.name}</h1>
      <img src={dress.image} alt={dress.name} className="product-image" />
      <p>{dress.description}</p>
      <p className="price">Price: ${dress.price}</p>

      <div className="available-size">
        <h3>Available Sizes:</h3>
        <div className="size-buttons">
          {dress.sizes?.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeSelect(size)}
              className={selectedSize === size ? "selected" : ""}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="available-color">
        <h3>Available Colors:</h3>
        <div className="color-buttons">
          {dress.colors?.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={selectedColor === color ? "selected" : ""}
              style={{ backgroundColor: color.toLowerCase() }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <button className="cart-button" onClick={addToCart}>
        Add to Cart
      </button>

      <ToastContainer />
    </div>
  );
}

export default ProductDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

function Cart({ cart, removeFromCart, decreaseQuantity }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your Cart is Empty</p>
          <Link to='/app' style={{textDecoration:'none',color:'black'}}>
          <h1>Back to Home</h1>
          </Link>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: '20px' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '50px', marginRight: '10px' }}
              />
              <span>{item.title}</span>
              <span style={{ marginLeft: '10px' }}>Price: ${item.price}</span>
              <span style={{ marginLeft: '10px' }}>
                Quantity: {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
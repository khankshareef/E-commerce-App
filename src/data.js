.hero-com{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 140px;
    position: relative;
    border-bottom: 2px solid black;
   
    .middle{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 26vw;
        cursor: pointer;
    }
    .hover1:hover{
        color: red;
    }
    .hover2:hover{
        color: red;
    }
    .hover3:hover{
        color: red;
    }
    .hover4:hover{
        color: red;
    }
    .hover5:hover{
        color: red;
    }
    .hover6:hover{
        color: red;
    }
    .right{
        display: flex;
        align-items: center;
        width: 150px;
        justify-content: space-between;
        cursor: pointer;
        .hovers1:hover{
            color: red;
        }
        .hovers2:hover{
            color: red;
        }
        .hovers3:hover{
            color: red;
        }
        .hovers4:hover{
            color: red;
        }
    }

}



import React from 'react'
import './Product3.css'

function Product3() {
  return (
    <div className='Product3-com col-4'>
      <div className='product rows=3' >
        <div>
      <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg" alt="" width={250} height={300}/>
      <div className='row1'>
      <span style={{fontSize:'14px',color:'gray'}}>Shoes</span>
      <span style={{fontWeight:'bolder'}}>Leather mid-heel Sandals </span>
      <span  style={{color:'gray'}}>$129.00 </span>
      </div>
      </div>
      <div>
      <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-6.jpg" alt="" width={250} height={300} />
      <div className='row2'>
        <span style={{fontSize:'14px',color:'gray'}} > Dresses</span>
        <span style={{fontWeight:'bolder'}}>Cotton floral print Dress </span>
        <span style={{color:'gray'}}>$40.00 </span>
      </div>
      </div>
      <div>
      <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg" alt=""  width={250} height={300}/>
      <div className='row3'>
        <span style={{fontSize:'14px',color:'gray'}}> Shoes</span>
        <span style={{fontWeight:'bolder'}}>Leather Sneakers  </span>
        <span style={{color:'gray'}}> $85.00 $85.00  </span>
      </div>
      </div>
      <div>
      <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-9.jpg" alt="" width={250} height={300}/>
      <div className='row4'>
        <span style={{fontSize:'14px',color:'gray'}}> Dresses</span>
        <span style={{fontWeight:'bolder'}}>Floral print midi Dress  </span>
        <span style={{color:'gray'}}> $50.00  </span>
      </div>
      </div>
      <div>
      <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-10.jpg" alt="" width={250} height={300}/>
      <div className='row5'>
        <span style={{fontSize:'14px',color:'gray'}}> Bags</span>
        <span style={{fontWeight:'bolder'}}>Suede cross body Bag   </span>
        <span style={{color:'gray'}}> $79.00 $49.00  $50.00  </span>
      </div>
      </div>
      <div>
        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-8.jpg" alt="" width={250} height={300}/>
        <div className='row6'>
        <span style={{fontSize:'14px',color:'gray'}}> Tops</span>
        <span style={{fontWeight:'bolder'}}>Cropped cotton Top    </span>
        <span style={{color:'gray'}}> $29.00  </span>
      </div>
        </div>
        <div>
        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-11.jpg" alt="" width={250} height={300}/>
        <div className='row7'>
        <span style={{fontSize:'14px',color:'gray'}}> Skirts</span>
        <span style={{fontWeight:'bolder'}}>Printed A-line Skirt    </span>
        <span style={{color:'gray'}}>$79.00   </span>
      </div>
        </div>
        <div>
        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg" alt="" width={250} height={300}/>
        <div className='row8'>
        <span style={{fontSize:'14px',color:'gray'}}> Shoes</span>
        <span style={{fontWeight:'bolder'}}>Heel strappy Sandals   </span>
        <span style={{color:'gray'}}>$90.00  </span>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Product3




<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="clothing-list">
      {clothingData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="clothing-grid">
          {clothingData.map((item) => (
            <div key={item.id} className="clothing-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>


    <div key={item.id} className="clothing-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>






            import React, { useEffect, useState } from 'react';
import './Product3.css';

function Product3({ setcart, Delete, selectedCategory }) {
  const [clothingData, setClothingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClothingData = async () => {
    const apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setClothingData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClothingData();
  }, [selectedCategory]); // Refetch when the category changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="clothing-list">
      <div className="clothing-grid">
        {clothingData.length === 0 ? (
          <p>No clothing items available.</p>
        ) : (
          clothingData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description.length==200}</p>
                <p style={{ marginBottom: '40px' }}>Price: ${item.price}</p>
                <button
                  onClick={() => Delete()}
                  type="button"
                  className="btn btn-warning buttonss"
                >
                  Clear
                </button>
                <button
                  onClick={() => setcart(item)}
                  type="button"
                  className="btn btn-primary mx-5 buttons"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Product3;




import React, { useState } from 'react';
import Discover from '../Products/Discover';
import LatestContents from '../Products/LatestContents';
import ShopperProd from '../Products/ShopperProd';
import Slipper from '../Products/Slipper';
import Product3 from './Product3';
import './ProductContainer.css';

function ProductContainer({ setcart, Delete }) {
  const [selectedCategory, setSelectedCategory] = useState("women's clothing"); // Default category

  return (
    <>
      <div className="Content2-com">
        <div>
          <h2 style={{ fontWeight: 'bolder' }}>Top Month Sellers</h2>
        </div>
        <div className="actives">
          {/* Change category on click */}
          <h6 className="women" onClick={() => setSelectedCategory("women's clothing")}>
            Women
          </h6>
          <h6 className="women1" onClick={() => setSelectedCategory("men's clothing")}>
            Men
          </h6>
          <h6 className="women2" onClick={() => setSelectedCategory('jewelery')}>
            Kids
          </h6>
        </div>
        {/* Pass selectedCategory to Product3 */}
        <Product3 setcart={setcart} Delete={Delete} selectedCategory={selectedCategory} />
        <Discover />
        <Slipper />
        <LatestContents />
        <ShopperProd />
      </div>
    </>
  );
}

export default ProductContainer;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Product3({ setcart, selectedCategory }) {
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]); // Store products from API
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);      // Track error state

  // Fetch products from API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://fakestoreapi.com/products'); // Example API URL
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  // Filter products by selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Handle product click to navigate to product details page
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } }); // Pass product to the details page
  };

  // Show loading or error state while fetching products
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.title}</h3>
            <button
              onClick={() => setcart(item)} // Add item to cart
              type="button"
              className="btn btn-primary mx-5 buttons"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleProductClick(item)} // View product details
              className="btn btn-info mx-5 buttons"
            >
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Product3;



import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state; // Access the product data passed from the previous page

  return (
    <div>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
}

export default ProductDetails


<Route path='/product' element={<Product />}/>
          <Route path='/content' element={<Content />}/>
          <Route path='/products' element={<Products />}/>
         <Route path='produce' element={ <Produce1 />}/> 
         <Product />
         <Content />
         <Products />
         <Produce1 />
       


         import React from 'react';

import './App.css';

import ProductContainer from './ContentWithPro/ProductContainer';
import Content from './Products/Content';
import Produce1 from './Products/Produce1';
import Product from './Products/Product';
import Products from './Products/Products';

function App() {
  return (
   <div>
      <Product />
         <Content />
         <Products />
         <Produce1 />
       <ProductContainer/>
      </div>
  );
}

export default App;

       
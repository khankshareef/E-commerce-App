import React, { useState } from 'react';
import Discover from '../Products/Discover';
import LatestContents from '../Products/LatestContents';
import ShopperProd from '../Products/ShopperProd';
import Slipper from '../Products/Slipper';
import Product3 from './Product3';
import './ProductContainer.css';

function ProductContainer({cart, setcart, Delete }) {
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
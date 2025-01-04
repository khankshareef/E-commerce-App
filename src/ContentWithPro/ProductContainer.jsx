import { useState } from 'react';
import Discover from '../Products/Discover';
import LatestContents from '../Products/LatestContents';
import ShopperProd from '../Products/ShopperProd';
import Slipper from '../Products/Slipper';
import Product3 from './Product3';

import './ProductContainer.css';

function ProductContainer({ cart, setcart, Delete }) {
  const [selectedCategory, setSelectedCategory] = useState("women's clothing"); // Default category

  return (
    <div className="Content2-com">
      <div>
        <h2 style={{ fontWeight: 'bolder' }}>Top Month Sellers</h2>
      </div>
      <div className="actives">
        {/* Update category on click */}
        <h6
          className={`category ${selectedCategory === "women's clothing" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women
        </h6>
        <h6
          className={`category ${selectedCategory === "men's clothing" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men
        </h6>
        <h6
          className={`category ${selectedCategory === "kids clothing" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("kids clothing")}
        >
          Kids
        </h6>
      </div>

      {/* Pass selectedCategory to Product3 */}
      <Product3 selectedCategory={selectedCategory} />

      {/* Additional Components */}
      <Discover />
      <Slipper />
      <LatestContents />
      <ShopperProd />
    </div>
  );
}

export default ProductContainer;

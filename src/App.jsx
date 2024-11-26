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

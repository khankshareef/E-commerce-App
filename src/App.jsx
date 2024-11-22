import React from 'react'
import './App.css'
import Herotype from './Components/Herotype'
import Nav3Comp from './Components/Nav3Comp'
import Navbar from './Components/Navbar'
import ProductContainer from './ContentWithPro/ProductContainer'
import Content from './Products/Content'
import Produce1 from './Products/Produce1'
import Product from './Products/Product'
import Products from './Products/Products'


function App() {
  return (
    <div className='container'>
      <div className='screens'>
      <Navbar/>
      <Herotype/>
      <Nav3Comp/>
      <Product/>
      <Content/>
      <Products/>
      <Produce1/>
     
      <ProductContainer/>
      </div>
    </div>
  )
}

export default App
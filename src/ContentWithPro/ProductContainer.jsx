import React from 'react'
import Discover from '../Products/Discover'
import Footer from '../Products/Footer'
import LatestContents from '../Products/LatestContents'
import ShopperProd from '../Products/ShopperProd'
import Slipper from '../Products/Slipper'
import Product3 from './Product3'
import './ProductContainer.css'

function ProductContainer() {
  return (
    <>
    <div className='Content2-com'>
      <div>
        <h2 style={{fontWeight:'bolder'}}>Top month Sellers</h2>
      </div>
      <div className='actives'>
        <h6 className='women'>Women</h6>
        <h6 className='women1'>Men</h6>
        <h6 className='women2'>Kids</h6>
      </div>
      <Product3/>
      <Discover/>
      <Slipper/>
      <LatestContents/>
      <ShopperProd/>
      <Footer/>
      </div>
    
    </>
  )
}

export default ProductContainer
import React from 'react'
import Product3 from '../ContentWithPro/Product3'
import './Nav3Comp.css'

function Nav3Comp({addToCart}) {
  return (
    <div className='nav3-comp'>
        <span className='happy-holiday' style={{fontSize:'13px',fontWeight:'bolder'}}>⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️</span>
    <Product3 addToCart={addToCart}/>
    </div>
  )
}

export default Nav3Comp
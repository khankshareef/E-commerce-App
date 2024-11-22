import React from 'react';
import './Slipper.css';
import Timer from './Timer';

function Slipper() {
  return (
    <>
    <div className='Slippers'>
        <div className='image'>
            <img src='https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-4.jpg' width={1283} height={500}/>
        </div>
    </div>
    <Timer/>
    </>
  )
}

export default Slipper
import React from 'react';
import { Link } from 'react-router-dom';
import './Slipper.css';
import Timer from './Timer';

function Slipper() {
  return (
    <>
    <div className='Slippers'>
      <Link to='slipper'>
        <div className='image'>
          
            <img src='https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-4.jpg' width={1283} height={500}/>
        </div>
        </Link>
        <Timer/>
    </div>
    </>
  )
}

export default Slipper
import React from 'react'
import Produce from './Produce'
import './Produce1.css'

function Produce1() {
  return (
    <>
    <div className='Produce1'>
         <div className='products'>
            <img  src='https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MjJkZGVlZDYt/MjJkZGVlZDYt-OGRmN2JmYWEt-w379._SY304_CB410698465_.jpg' width={700} height={350}/>
        </div>
        <div className='products1'>
            <img  src='https://m.media-amazon.com/images/I/714eIPqFXLL._AC_UL480_FMwebp_QL65_.jpg' width={250} height={350}/>
        </div>
    </div>
    <div className='produse2'>
    <Produce/>
    </div>
    </>
  )
}

export default Produce1
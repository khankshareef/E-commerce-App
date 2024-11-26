import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product3 from '../ContentWithPro/Product3';

function ProductDetails() {
  const {id}=useParams();
  const [Data,setData]=useState(null);
  const [fetch,setfetch]=useState([]);
  useEffect(()=>{
   const data=Data.filter((item,index)=>item.id == id);
   setData(data[0]);
   const Fetch=fetch.filter((itemm,index)=>itemm.title === itemm.title);
   setfetch(Fetch);

  },[id,Data.title])
  return (
    <div>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h2>{Data.name}</h2>
      <p>{Data.description}</p>
      {/* Add more product details here */}
      <Product3 item={fetch}/>
    </div>
  );
}

export default ProductDetails
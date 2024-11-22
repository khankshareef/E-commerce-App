import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import React from 'react';
import './Product.css';

function Product() {
  return (
    
    <div className='Products-con'>
        <div className='products'>
            <img className='hover1' src='https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg' width={430} height={450}/>
            <img  className='hover2' src='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/89b457ae-5fc2-477a-92a8-f8e5b70e748a._CR0,0,1200,628_SX920_QL70_.jpg' width={430} height={450}/>
            <img  className='hover3' src='https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg' width={430} height={450}/>
            </div>
            <div className='buttons'>
            <button style={{color:'black',height:'50px',width:'150px',border:'none'}} >Show Women <ArrowForwardTwoToneIcon  className='arrow'/></button>
            <button style={{color:'black',height:'50px',width:'150px',border:'none'}} > Show Men<ArrowForwardTwoToneIcon className='arrow'/></button>
            <button style={{color:'black',height:'50px',width:'150px',border:'none'}} >Show Women <ArrowForwardTwoToneIcon className='arrow'/></button>
            </div>
       
    </div>
  )
}

export default Product
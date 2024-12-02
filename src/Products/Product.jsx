import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product() {
  const womenImageUrl = "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg";
  const menImageUrl = "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/89b457ae-5fc2-477a-92a8-f8e5b70e748a._CR0,0,1200,628_SX920_QL70_.jpg";
  const kidsImageUrl = "https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-15608.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid";

  return (
    <div className="products-container">
      <div className="products">
        {/* Show Women */}
        <div className="product-card">
          <Link to="/women" state={{ imageUrl: womenImageUrl }}>
            <img style={{width:'500px',height:'400px'}} src={womenImageUrl} alt="Women" />
            <button className="product-button">
              Show Women <ArrowForwardTwoToneIcon className="arrow" />
            </button>
          </Link>
          <h1 style={{position:'absolute',top:'36%',left:'37%',fontWeight:'bolder',color:'white'}}>Women</h1>
        </div>

        {/* Show Men */}
        <div className="product-card">
          <Link to="/men" state={{ imageUrl: menImageUrl }}>
            <img style={{width:'500px',height:'400px'}} src={menImageUrl} alt="Men" />
            <button className="product-button">
              Show Men <ArrowForwardTwoToneIcon className="arrow" />
            </button>
          </Link>
          <h1 style={{position:'absolute',top:'35%',left:'42%',fontWeight:'bolder',color:'white'}}>Men</h1>
        </div>

        {/* Show Kids */}
        <div className="product-card">
          <Link to="/kids" state={{ imageUrl: kidsImageUrl }}>
            <img style={{width:'500px',height:'400px'}} src={kidsImageUrl} alt="Kids" />
            <button className="product-button">
              Show Kids <ArrowForwardTwoToneIcon className="arrow" />
            </button>
          </Link>
          <h1 style={{position:'absolute',top:'35%',left:'40%',fontWeight:'bolder',color:'white'}}>Kid's</h1>
        </div>
      </div>
    </div>
  );
}

export default Product;

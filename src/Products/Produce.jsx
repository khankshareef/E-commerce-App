import React from 'react';
import { Link } from 'react-router-dom';
import './Produce.css';

function Produce() {
  return (
    <div className="produce" style={{position:'relative',top:'-50px'}}>
      <div className="images">
        {/* First Image */}
        <Link to="/menimage" className="image-wrapper">
          <img style={{width:'300px',height:'380px'}}
            className="image image1"
            src="https://img.freepik.com/free-photo/young-smiling-man-red-shirt-with-optical-glasses-points-himself-isolated-orange-wall_141793-35496.jpg?ga=GA1.1.1854208482.1732183473&semt=ais_hybrid"
            alt="Person 1"
          />
          <h3 style={{position:'absolute',top:'27%',left:'35%',color:'white',fontWeight:'bolder'}}>Tsirts</h3>
          <span className="shop-now-btn">Shop Now ➡ </span>
        </Link>

        {/* Second Image */}
        <Link to="/ladies" className="image-wrapper">
          <img style={{height:'380px',width:'700px'}}
            className="image image2"
            src="https://img.freepik.com/free-photo/portrait-two-young-beautiful-indian-south-asian-teenage-girls-dress-posed-near-bushes_627829-5342.jpg?ga=GA1.1.1854208482.1732183473&semt=ais_hybrid"
            alt="Person 2"
          />
          <span className="shop-now-btn">Shop Now ➡ </span>
          <h3 style={{position:'absolute',top:'30%',left:'30%',color:'white',fontWeight:'bolder'}}>Basic women's Dresses</h3>
        </Link>
      </div>
    </div>
  );
}

export default Produce;
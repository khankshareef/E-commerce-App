import React from 'react'
import './Latest.css'

function LatestContents() {
  return (
    <div className='LatestContents'>
        <div className='content'>
       <span style={{color:'gray'}}>What buyers say </span>
       <span><h1 style={{fontWeight:'bolder'}}>Latest buyers Reviews</h1></span>
       </div>
       <div className='conten-detail'>
       <div className="card" style={{width:'300px'}}>
       
  <img style={{width:'100px',margin:'20px'}}  src="https://img.freepik.com/free-photo/pair-trainers_144627-3798.jpg?ga=GA1.1.1854208482.1732183473&semt=ais_hybrid"  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Low top Sneakers</h5>
    <p className="card-text">From creepeth said moved give divide make multiple of him shall
        itself also above second dosen't unto created saying land herb sea midst night wherein.
    </p>
    <p>Logan Edwards,01 jun 2019 </p>
  </div>
 
</div>
<div className="card" style={{width:'300px'}}>

  <img style={{width:'100px',margin:'20px'}}  src="https://img.freepik.com/free-photo/woman-with-floral-dress-bare-feet_23-2148261281.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid"  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cotton Print Dress</h5>
    <p className="card-text" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>God every fill great replenish darkness unto. Very open.Likeness their that light .Given under image to.
        Subdue of shall catte day fish from saw sprit and give starts,us you whales may,land,saw fill unto.
    </p>
   <p> Jane Jefferson,29 May 2019</p>
  </div>

</div>
<div className="card" style={{width:'300px'}}>
  
  <img style={{width:'100px',margin:'20px'}}  src="https://img.freepik.com/premium-vector/graffiti-art-cool-graphic-tshirts-urban-typography-vector_408922-247.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid"  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oversized print T-shirt</h5>
    <p className="card-text">Fill his waters sherein sign likeness waters.Second light gathered appear
        sixth fourth,seasons behold creeping female
    </p>
    <p>Darrell Baker, 18 May 2019 </p>
  </div>

</div>
       </div>
       </div>
  )
}

export default LatestContents
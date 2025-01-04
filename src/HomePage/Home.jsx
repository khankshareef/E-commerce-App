import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    // Automatically open the link when the component is rendered
    window.location.href = 'https://e-commerce-anae.vercel.app/';
  }, []);

  return (
    <div className="home-head">
      <h1>Redirecting...</h1>
    </div>
  );
}

export default Home;

import React from 'react';
import Product from './Product';

function Home() {
  return (
    <div className="container">
      <h1>PRODUCTS</h1>
      <Product
        price={229.00}
        title="G.SKILL Ripjaws V Series DDR4 3600MHz 32GB(16GBx2) Memory Kit"
      ></Product>
    </div>
  )
}

export default Home;
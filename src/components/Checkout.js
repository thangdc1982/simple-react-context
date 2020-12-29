import React from 'react';
import Product from './Product';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className="container-fluid">
      <h1>CHEKOUT</h1>
      <h1>YOUR CART TOTAL: $ {getBasketTotal(basket)}</h1>
     <div className="d-flex">
        {
          basket?.map((item, index) => (
            <Product
              key={index}
              price={item.price}
              title="G.SKILL Ripjaws V Series DDR4 3600MHz 32GB(16GBx2) Memory Kit"
              hiddenButton
            ></Product>
          ))
        }        
      </div>
    </div>
  )
}

export default Checkout;

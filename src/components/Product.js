import React from 'react';
import { useStateValue } from '../StateProvider';

function Product({price, title, hiddenButton, showRemoveButton}) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        price
      }
    })
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        price
      }
    })
  };

  return (
    <div>
      <div className="card" style={{width:"400px"}}>
        <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61hh5DtX35L._AC._SR360,460.jpg" alt="" />
        <div className="card-body">
          <h5 className="card-tile">$ {price}</h5>
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {
            !hiddenButton && <button className="card-text btn btn-primary" onClick={addToCart}>Add To Cart</button> 
          }          
        </div>
        {
          showRemoveButton && (
            <div className="card-body">
              <button className="card-text btn btn-primary" onClick={removeFromCart}>Remove From Cart</button>           
            </div>
          )
        }     
      </div>   
    </div>
  )
}

export default Product;

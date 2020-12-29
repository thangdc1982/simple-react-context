import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{basket}] = useStateValue();  

  return (
    <div>
      <div className="d-flex p-3 bg-secondary text-white">  
        <div className="p-2 bg-info"><Link to="/">Home</Link></div>
        <div className="p-2 bg-warning"><Link to="/reviews">Reviews</Link></div>
        <div className="p-2 bg-primary"><Link to="/checkout">Checkout</Link></div>
        <div className="p-2 bg-success">
          <span><i className="fa fa-shopping-cart fa-2x"></i></span>              
          <span className="basket-count"><strong>{basket ? basket.length : 0}</strong></span>
        </div>
      </div>          
    </div>
  )
};

export default Header;

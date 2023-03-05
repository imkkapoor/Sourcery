import React from 'react'
import "./BestSellerItem.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';


export default function BestSellerItem({item}) {
  return (
    <div className='best-seller-item-container'>
      <div id="Favorite-Border-Icon"><FavoriteBorderIcon/></div>
      <Link
                to={`/product/${item._id}`}
                style={{ textDecoration: "none" }}
            >
        <img src = {item.image} alt="product-banner" />
        <div>
            
            <h5>{item.company}</h5>
            <p>{item.title}</p>
            <p className='variant'>{item.variant}</p>
        </div>
        </Link>
    </div>
  )
}

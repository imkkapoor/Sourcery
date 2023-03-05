import React from 'react'
import "./BestSellerItem.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function BestSellerItem({item}) {
  return (
    <div className='best-seller-item-container'>
        <img src = {item.image} alt="product-banner" />
        <div>
            <div id="Favorite-Border-Icon"><FavoriteBorderIcon/></div>
            <h5>{item.company}</h5>
            <p>{item.title}</p>
            <p className='variant'>{item.variant}</p>
        </div>
    </div>
  )
}

import React from 'react';
import "./Newsletter.css";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Newsletter() {
  return (
    <div className='newsletter-container'>
        <h1>Newsletter</h1>
        <p>Get monthly updates, to stay on top of fashion trends.</p>
        <div className='newsletter-input'>
            <input placeholder='Your email'/>
            <button><SendOutlinedIcon/> </button>
        </div>
    </div>
  )
}

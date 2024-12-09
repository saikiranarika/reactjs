import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
  <div className="navSection">
        <div className="title">
           <h2>S-mart</h2>
       </div>
       <div className="search">
           <input type="text" placeholder='Search..' />
        </div>
        <div className="user">
           <div className="user-detail">SignIN/SignUP</div>
        </div>
        <div className="cart">Cart </div>
  </div>
  <div className="subMenu">
    <ul>
         <Link to={'/mobiles'}><li className='a'>Mobiles</li></Link>
        
        <li>Computers</li>
        <li>Sunglases</li>
        <li>Bags</li>
        <li>Watches</li>
        <li>Women Dressing</li>
    </ul>
  </div>
  </>
  )
}

export default Navbar

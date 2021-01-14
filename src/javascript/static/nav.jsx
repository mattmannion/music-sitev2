import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/icons/logo-icon/ms-icon-70x70.png';

export default function nav() {
  return (
    <>
      <div className='nav'>
        <nav className='nav-top'>
          <Link className='nav-top__logo' to='/'>
            <img src={logo} alt='Music-site Logo' />
            <div>Music site</div>
          </Link>
          <input
            className='nav-top__search'
            type='search'
            placeholder='search'
          />
          <div>1 (123) 456-7890</div>
          <div className='nav-top__account'>
            <div>Login</div>
            <div>Sign-up</div>
          </div>
          <div>Cart</div>
        </nav>
        <nav className='nav-bot'>
          <div className='nav-bot__container'>
            <Link to='/product'>To Product</Link>
            <div>new items</div>
            <div>on sale</div>
            <div>news</div>
            <div>support</div>
            <div>more</div>
          </div>
        </nav>
      </div>
    </>
  );
}

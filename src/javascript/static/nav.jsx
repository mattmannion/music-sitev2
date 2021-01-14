import React from 'react';
import { Link } from 'react-router-dom';

export default function nav() {
  return (
    <>
      <div className='nav__container'>
        <nav className='nav-top'>
          <div className='nav-top__logo'>
            <Link to='/'>Logo</Link>
          </div>
          <input
            className='nav-top__search'
            type='search'
            placeholder='search'
          />
          <div>1 (123) 456-7890</div>
          <div>Login</div>
          <div>Sign-up</div>
          <div>Cart</div>
        </nav>
        <nav className='nav-bot'>
          <div className='nav-bot__container'>
            <div>category</div>
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

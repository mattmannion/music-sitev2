import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/icons/logo-icon/ms-icon-144x144.png';

export default function footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <Link className='footer__logo' to='/'>
            <img src={logo} alt='Music site logo' />
            <div>Music site</div>
          </Link>
          <div className='footer__hero'>
            <div className='footer__column'>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
            </div>
            <div className='footer__column'>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
            </div>
            <div className='footer__column'>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
            </div>
            <div className='footer__column'>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
              <div>filler</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

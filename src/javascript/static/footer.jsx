import React from 'react';
import { Link } from 'react-router-dom';

export default function footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <Link className='footer__logo' to='/'>
            Logo
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

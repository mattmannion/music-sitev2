import React from 'react';
import logo from '../../../resources/icons/ms-icon/ms-icon-70x70.png';
import viewerItem from '../../../resources/images/vendor/unsplash/strat-item.jpg';

const details = () => (
  <>
    <div className='details'>
      <div className='details__pricing '>
        <div>
          <h6>Buy now:</h6>
          <h1>$1234.56</h1>
        </div>
        <img src={logo} alt='logo icon' />
      </div>
      <div className='details__perks'>
        <div>
          <img src='' alt='' />
          <span>Quality Assurance</span>
        </div>
        <div>
          <img src='' alt='' />
          <span>Free Shipping</span>
        </div>
        <div>
          <img src='' alt='' />
          <span>24/7 Support</span>
        </div>
        <div>
          <img src='' alt='' />
          <span>1 Year warrenty</span>
        </div>
      </div>
      <div className='details__add-to-cart'>
        <button className='details__btn'>Add To Cart</button>
        <span>In stock and ready to ship</span>
      </div>
      <div className='details__options'>
        <img src={viewerItem} alt='options item photo' />
        <img src={viewerItem} alt='options item photo' />
        <img src={viewerItem} alt='options item photo' />
        <img src={viewerItem} alt='options item photo' />
      </div>
    </div>
  </>
);

export default details;

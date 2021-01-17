import React from 'react';
import { withRouter } from 'react-router-dom';
import viewerItem from '../../resources/images/vendor/unsplash/strat-item.jpg';
import mainItem from '../../resources/images/vendor/unsplash/strat-main.jpg';
import logo from '../../resources/icons/ms-icon/ms-icon-70x70.png';

const Product = () => (
  <>
    <div className='product'>
      <div className='viewer'>
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
        <img
          src={viewerItem}
          alt='viewer item photo'
          className='viewer__items'
        />
      </div>
      <div className='product__main'>
        <img src={mainItem} alt='main item photo' className='main__item' />
      </div>
      <div className='details'>
        <div className='details__pricing '>
          <div className='price-grouping'>
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
        <div className='details__options'>
          <img
            src={viewerItem}
            alt='viewer item photo'
            className='viewer__items'
          />
          <img
            src={viewerItem}
            alt='viewer item photo'
            className='viewer__items'
          />
          <img
            src={viewerItem}
            alt='viewer item photo'
            className='viewer__items'
          />
          <img
            src={viewerItem}
            alt='viewer item photo'
            className='viewer__items'
          />
        </div>
      </div>
    </div>
  </>
);

export default withRouter(Product);

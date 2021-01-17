import React from 'react';
import { withRouter } from 'react-router-dom';
import viewerItem from '../../resources/images/vendor/unsplash/strat-item.jpg';
import mainItem from '../../resources/images/vendor/unsplash/strat-main.jpg';

const Product = () => (
  <>
    <div className='product'>
      <div className='product__viewer'>
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
    </div>
  </>
);

export default withRouter(Product);

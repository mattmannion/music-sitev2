import React from 'react';
import viewerItem from '../../../resources/images/vendor/unsplash/strat-item.jpg';
import mainItem from '../../../resources/images/vendor/unsplash/strat-main.jpg';

const viewer = () => (
  <>
    <div className='viewer'>
      <img src={viewerItem} alt='viewer item photo' className='viewer__items' />
      <img src={viewerItem} alt='viewer item photo' className='viewer__items' />
      <img src={viewerItem} alt='viewer item photo' className='viewer__items' />
      <img src={viewerItem} alt='viewer item photo' className='viewer__items' />
      <img src={viewerItem} alt='viewer item photo' className='viewer__items' />
      <img src={viewerItem} alt='viewer item photo' className='viewer__items' />
    </div>
    <div className='product__main'>
      <img src={mainItem} alt='main item photo' className='main__item' />
    </div>
  </>
);

export default viewer;
